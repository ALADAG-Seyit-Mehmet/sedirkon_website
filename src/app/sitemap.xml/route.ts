import { MOCK_PRODUCTS, MOCK_PROJECTS, CATEGORIES } from "@/lib/data";

export async function GET() {
  const baseUrl = "https://sedirkon.com";

  // Static routes
  const staticRoutes = [
    "",
    "/iletisim",
    "/koleksiyon",
    "/atolye",
    "/malzemeler",
    "/projeler",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Category routes
  const categoryRoutes = CATEGORIES.filter(c => c.id !== "all").map((category) => ({
    url: `${baseUrl}/koleksiyon?kategori=${category.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Product routes
  const productRoutes = MOCK_PRODUCTS.map((product) => ({
    url: `${baseUrl}/koleksiyon/${product.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Project routes
  const projectRoutes = MOCK_PROJECTS.map((project) => ({
    url: `${baseUrl}/projeler/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const allRoutes = [...staticRoutes, ...categoryRoutes, ...productRoutes, ...projectRoutes];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map(
      (route) => `
  <url>
    <loc>${route.url}</loc>
    <lastmod>${route.lastModified}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
