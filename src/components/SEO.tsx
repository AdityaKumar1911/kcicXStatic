import { useEffect } from 'react';
import { updateMetaTags, SEOConfig } from '@/utils/seo';

interface SEOProps extends SEOConfig {
  children?: React.ReactNode;
}

export const SEO: React.FC<SEOProps> = ({ children, ...config }) => {
  useEffect(() => {
    updateMetaTags(config);
  }, [config.title, config.description, config.url]);

  return <>{children}</>;
};

// Structured Data Component for Organization
export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "KCIC Pathway College",
    "alternateName": "KCIC",
    "url": "https://kcic.edu.in",
    "logo": "https://kcic.edu.in/logo.png",
    "description": "Study in India, Graduate Globally. Affordable pathway programs to top UK, Finnish, and Australian universities.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://facebook.com/kcic",
      "https://twitter.com/kcic",
      "https://linkedin.com/company/kcic"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Course Schema for program pages
export const CourseSchema = ({ name, description, provider = "KCIC Pathway College" }: { name: string; description: string; provider?: string }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": name,
    "description": description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": provider
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
