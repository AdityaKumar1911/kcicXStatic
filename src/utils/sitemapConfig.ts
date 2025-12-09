// Sitemap configuration for all routes
export interface SitemapRoute {
  path: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastmod?: string;
}

export const BASE_URL = 'https://kcic.edu.in';

export const getCurrentDate = (): string => new Date().toISOString().split('T')[0];

// Static routes configuration
export const staticRoutes: SitemapRoute[] = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/programs', priority: 0.9, changefreq: 'weekly' },
  { path: '/universities', priority: 0.9, changefreq: 'weekly' },
  { path: '/campuses', priority: 0.8, changefreq: 'monthly' },
  { path: '/tutors', priority: 0.8, changefreq: 'monthly' },
  { path: '/pathways', priority: 0.8, changefreq: 'monthly' },
  { path: '/students', priority: 0.7, changefreq: 'monthly' },
  { path: '/parents-student-hub', priority: 0.7, changefreq: 'monthly' },
  { path: '/contact', priority: 0.6, changefreq: 'monthly' },
  { path: '/apply', priority: 0.9, changefreq: 'monthly' },
  { path: '/manifesto', priority: 0.5, changefreq: 'yearly' },
];

// Dedicated program pages (higher priority)
export const dedicatedProgramRoutes: SitemapRoute[] = [
  { path: '/programs/beng-hons-motorsport-engineering', priority: 0.85, changefreq: 'monthly' },
  { path: '/programs/beng-hons-artificial-intelligence-with-placement', priority: 0.85, changefreq: 'monthly' },
  { path: '/programs/bsc-hons-psychology', priority: 0.85, changefreq: 'monthly' },
  { path: '/programs/beng-hons-aerospace-engineering', priority: 0.85, changefreq: 'monthly' },
  { path: '/programs/bsc-hons-biomedical-science', priority: 0.85, changefreq: 'monthly' },
  { path: '/programs/beng-hons-biomedical-engineering', priority: 0.85, changefreq: 'monthly' },
  { path: '/programs/beng-hons-civil-engineering', priority: 0.85, changefreq: 'monthly' },
  { path: '/programs/bsc-hons-accounting-finance-acca', priority: 0.85, changefreq: 'monthly' },
  { path: '/programs/beng-hons-electrical-electronics-semiconductor', priority: 0.85, changefreq: 'monthly' },
  { path: '/programs/beng-hons-computer-systems-engineering', priority: 0.85, changefreq: 'monthly' },
  { path: '/programs/beng-hons-electronics-embedded-systems', priority: 0.85, changefreq: 'monthly' },
  { path: '/programs/beng-hons-electrical-railway-engineering', priority: 0.85, changefreq: 'monthly' },
];

// Generate dynamic routes from data
export const generateDynamicRoutes = (
  slugs: string[],
  basePath: string,
  priority: number,
  changefreq: SitemapRoute['changefreq']
): SitemapRoute[] => slugs.map(slug => ({ path: `${basePath}/${slug}`, priority, changefreq }));

// Get all routes combined
export const getAllRoutes = (
  programSlugs: string[],
  universitySlugs: string[],
  campusSlugs: string[],
  tutorSlugs: string[]
): SitemapRoute[] => [
  ...staticRoutes,
  ...dedicatedProgramRoutes,
  ...generateDynamicRoutes(programSlugs, '/programs', 0.8, 'monthly'),
  ...generateDynamicRoutes(universitySlugs, '/universities', 0.75, 'monthly'),
  ...generateDynamicRoutes(campusSlugs, '/campuses', 0.7, 'monthly'),
  ...generateDynamicRoutes(tutorSlugs, '/tutors', 0.65, 'monthly'),
];

// Generate XML for a single URL entry
export const generateUrlXml = (route: SitemapRoute, lastmod: string): string =>
  `  <url>\n    <loc>${BASE_URL}${route.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${route.changefreq}</changefreq>\n    <priority>${route.priority.toFixed(1)}</priority>\n  </url>`;

// Generate complete sitemap XML
export const generateSitemapXml = (routes: SitemapRoute[]): string => {
  const lastmod = getCurrentDate();
  const urlEntries = routes.map(route => generateUrlXml(route, lastmod)).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>`;
};
