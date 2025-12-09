// SEO utility functions for dynamic meta tags and structured data

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const updateMetaTags = (config: SEOConfig) => {
  const baseUrl = 'https://kcic.edu.in';
  
  // Update title
  document.title = config.title;
  
  // Update or create meta tags
  const updateMeta = (name: string, content: string, isProperty = false) => {
    const attr = isProperty ? 'property' : 'name';
    let element = document.querySelector(`meta[${attr}="${name}"]`);
    
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attr, name);
      document.head.appendChild(element);
    }
    
    element.setAttribute('content', content);
  };
  
  // Standard meta tags
  updateMeta('description', config.description);
  if (config.keywords) updateMeta('keywords', config.keywords);
  
  // Open Graph tags
  updateMeta('og:title', config.title, true);
  updateMeta('og:description', config.description, true);
  updateMeta('og:url', config.url || baseUrl, true);
  updateMeta('og:type', config.type || 'website', true);
  if (config.image) updateMeta('og:image', config.image, true);
  
  // Twitter tags
  updateMeta('twitter:title', config.title);
  updateMeta('twitter:description', config.description);
  if (config.image) updateMeta('twitter:image', config.image);
  
  // Canonical URL
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', config.url || baseUrl);
};
