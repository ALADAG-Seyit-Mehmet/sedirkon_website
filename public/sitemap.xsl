<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Sedirkon Mobilya - XML Site Haritası</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style type="text/css">
          :root {
            --bg-color: #0F1011;
            --text-main: #F5F5F0;
            --text-muted: rgba(245, 245, 240, 0.6);
            --accent: #CBA474;
            --border: rgba(245, 245, 240, 0.1);
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-main);
            margin: 0;
            padding: 40px 20px;
            line-height: 1.6;
          }
          #container {
            max-width: 1000px;
            margin: 0 auto;
          }
          h1 {
            font-size: 36px;
            font-weight: 300;
            letter-spacing: -0.02em;
            margin-bottom: 10px;
            color: var(--accent);
          }
          p.desc {
            color: var(--text-muted);
            font-size: 16px;
            margin-bottom: 40px;
          }
          .stats {
            background-color: rgba(255,255,255,0.03);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 40px;
            display: flex;
            gap: 40px;
          }
          .stat-item {
            display: flex;
            flex-direction: column;
          }
          .stat-value {
            font-size: 24px;
            font-weight: 600;
            color: var(--text-main);
          }
          .stat-label {
            font-size: 13px;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
            background-color: rgba(255,255,255,0.02);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          }
          th {
            background-color: rgba(255,255,255,0.05);
            padding: 16px 20px;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--text-muted);
            border-bottom: 1px solid var(--border);
          }
          td {
            padding: 16px 20px;
            border-bottom: 1px solid var(--border);
            font-size: 14px;
          }
          tr:last-child td {
            border-bottom: none;
          }
          tr:hover td {
            background-color: rgba(255,255,255,0.05);
          }
          a {
            color: var(--text-main);
            text-decoration: none;
            transition: color 0.2s;
          }
          a:hover {
            color: var(--accent);
          }
          .priority {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 4px;
            background-color: rgba(203, 164, 116, 0.1);
            color: var(--accent);
            font-weight: 600;
            font-size: 12px;
          }
          footer {
            margin-top: 60px;
            text-align: center;
            font-size: 13px;
            color: var(--text-muted);
          }
        </style>
      </head>
      <body>
        <div id="container">
          <h1>Sedirkon Mobilya Site Haritası</h1>
          <p class="desc">
            Bu XML site haritası, arama motorlarının sitemizdeki sayfaları daha kolay bulmasını sağlar. 
            Aşağıda sitemizde dizine eklenen URL'lerin tasarım odaklı arayüzünü görüntülüyorsunuz.
          </p>

          <div class="stats">
            <div class="stat-item">
              <span class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span>
              <span class="stat-label">Toplam Sayfa</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">GÜNLÜK</span>
              <span class="stat-label">Güncelleme Sıklığı</span>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Sayfa URL'si</th>
                <th>Öncelik (Priority)</th>
                <th>Güncelleme Sıklığı</th>
                <th>Son Değişiklik</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <xsl:variable name="itemURL">
                      <xsl:value-of select="sitemap:loc"/>
                    </xsl:variable>
                    <a href="{$itemURL}" target="_blank">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <span class="priority">
                      <xsl:value-of select="sitemap:priority"/>
                    </span>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:changefreq"/>
                  </td>
                  <td style="color: rgba(245, 245, 240, 0.6)">
                    <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
          
          <footer>
            © 2026 Sedirkon Mobilya. Tüm hakları saklıdır. SEO &amp; Arayüz Tasarımı.
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
