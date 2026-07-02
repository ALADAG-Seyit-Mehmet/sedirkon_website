const fs = require('fs');
const path = require('path');
const https = require('https');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, '/', file));
    }
  });
  return arrayOfFiles;
}

const files = getAllFiles('./src');
const urls = new Set();
const urlRegex = /https:\/\/images\.unsplash\.com\/[^\"\'\`\s\n]+/g;

files.forEach(file => {
  if (file.endsWith('.ts') || file.endsWith('.tsx')) {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.match(urlRegex);
    if (matches) {
      matches.forEach(m => urls.add(m));
    }
  }
});

console.log('Found ' + urls.size + ' unique unsplash URLs. Checking them...');

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({url, status: res.statusCode});
    }).on('error', (e) => {
      resolve({url, status: 'Error: ' + e.message});
    });
  });
}

async function checkAll() {
  const promises = Array.from(urls).map(url => checkUrl(url));
  const results = await Promise.all(promises);
  results.forEach(r => {
    if (r.status !== 200) {
      console.log('BROKEN: [' + r.status + '] ' + r.url);
    }
  });
  console.log('Done checking images.');
}
checkAll();
