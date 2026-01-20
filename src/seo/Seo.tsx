import { useEffect } from 'react';

type StructuredData = Record<string, unknown>;

export interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogType?: string;
  ogImage?: string;
  structuredData?: StructuredData;
}

const baseUrl = import.meta.env.VITE_SITE_URL || 'https://saisha-plastics.vercel.app';

const ensureMetaTag = (key: string, attr: 'name' | 'property') => {
  let tag = document.head.querySelector<HTMLMetaElement>(`[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  return tag;
};

const ensureLinkTag = (rel: string) => {
  let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  return tag;
};

export const Seo = ({
  title,
  description,
  keywords,
  canonicalPath,
  ogType = 'website',
  ogImage,
  structuredData,
}: SeoProps) => {
  useEffect(() => {
    document.title = title;

    ensureMetaTag('description', 'name').setAttribute('content', description);
    if (keywords) {
      ensureMetaTag('keywords', 'name').setAttribute('content', keywords);
    }

    const canonicalUrl = canonicalPath
      ? `${baseUrl}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`
      : baseUrl;
    ensureLinkTag('canonical').setAttribute('href', canonicalUrl);

    ensureMetaTag('og:title', 'property').setAttribute('content', title);
    ensureMetaTag('og:description', 'property').setAttribute('content', description);
    ensureMetaTag('og:type', 'property').setAttribute('content', ogType);
    ensureMetaTag('og:url', 'property').setAttribute('content', canonicalUrl);
    ensureMetaTag('og:site_name', 'property').setAttribute('content', 'SAIsha Plastics Management Consultant');
    if (ogImage) {
      ensureMetaTag('og:image', 'property').setAttribute('content', ogImage);
      ensureMetaTag('twitter:image', 'name').setAttribute('content', ogImage);
    }

    ensureMetaTag('twitter:card', 'name').setAttribute('content', 'summary_large_image');
    ensureMetaTag('twitter:title', 'name').setAttribute('content', title);
    ensureMetaTag('twitter:description', 'name').setAttribute('content', description);

    const existingStructuredData = document.getElementById('structured-data');
    if (structuredData) {
      const scriptTag = existingStructuredData ?? document.createElement('script');
      scriptTag.id = 'structured-data';
      scriptTag.type = 'application/ld+json';
      scriptTag.textContent = JSON.stringify(structuredData);
      if (!existingStructuredData) {
        document.head.appendChild(scriptTag);
      }
    } else if (existingStructuredData) {
      existingStructuredData.remove();
    }
  }, [title, description, keywords, canonicalPath, ogType, ogImage, structuredData]);

  return null;
};

export default Seo;
