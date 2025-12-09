#!/usr/bin/env node
/**
 * Automated Sitemap Generator
 * Generates sitemap.xml from all application routes
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://kcic.edu.in';
const getCurrentDate = () => new Date().toISOString().split('T')[0];

// Static routes
const staticRoutes = [
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

// Dedicated program pages
const dedicatedPrograms = [
  'beng-hons-motorsport-engineering',
  'beng-hons-artificial-intelligence-with-placement',
  'bsc-hons-psychology',
  'beng-hons-aerospace-engineering',
  'bsc-hons-biomedical-science',
  'beng-hons-biomedical-engineering',
  'beng-hons-civil-engineering',
  'bsc-hons-accounting-finance-acca',
  'beng-hons-electrical-electronics-semiconductor',
  'beng-hons-computer-systems-engineering',
  'beng-hons-electronics-embedded-systems',
  'beng-hons-electrical-railway-engineering',
];

// Dynamic data slugs
const programs = ['business', 'engineering', 'computer', 'psychology', 'science', 'construction', 'hospitality', 'cloud-computing'];
const universities = ['ulster-university', 'heriot-watt-edinburgh', 'university-of-sunderland', 'elmhurst-university', 'university-canada-west', 'royal-roads-university', 'uts-sydney', 'rmit-melbourne', 'tafe-nsw', 'heriot-watt-malaysia', 'heriot-watt-dubai', 'weltec-whitireia'];
const campuses = ['mumbai-campus', 'bangalore-campus', 'delhi-campus'];
const tutors = ['dr-rajesh-kumar', 'prof-priya-sharma', 'dr-amit-patel', 'dr-sneha-reddy', 'prof-vikram-singh', 'dr-meera-nair'];

function generateUrlEntry(path, priority, changefreq, lastmod) {
  return `  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
}

function generateSitemap() {
  const lastmod = getCurrentDate();
  const urls = [];

  // Add static routes
  staticRoutes.forEach(route => {
    urls.push(generateUrlEntry(route.path, route.priority, route.changefreq, lastmod));
  });

  // Add dedicated program pages
  dedicatedPrograms.forEach(slug => {
    urls.push(generateUrlEntry(`/programs/${slug}`, 0.85, 'monthly', lastmod));
  });

  // Add dynamic program pages
  programs.forEach(slug => {
    urls.push(generateUrlEntry(`/programs/${slug}`, 0.8, 'monthly', lastmod));
  });

  // Add university pages
  universities.forEach(slug => {
    urls.push(generateUrlEntry(`/universities/${slug}`, 0.75, 'monthly', lastmod));
  });

  // Add campus pages
  campuses.forEach(slug => {
    urls.push(generateUrlEntry(`/campuses/${slug}`, 0.7, 'monthly', lastmod));
  });

  // Add tutor pages
  tutors.forEach(slug => {
    urls.push(generateUrlEntry(`/tutors/${slug}`, 0.65, 'monthly', lastmod));
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
  console.log(`✅ Sitemap generated with ${urls.length} URLs`);
}

generateSitemap();
