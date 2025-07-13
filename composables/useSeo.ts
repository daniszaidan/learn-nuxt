import type { SeoMeta } from '~/types';

export const useSeo = () => {
  const config = useRuntimeConfig();
  
  const setSeoMeta = (meta: SeoMeta) => {
    useSeoMeta({
      title: meta.title,
      description: meta.description,
      ogTitle: meta.title,
      ogDescription: meta.description,
      ogImage: meta.image,
      twitterCard: 'summary_large_image',
      twitterTitle: meta.title,
      twitterDescription: meta.description,
      twitterImage: meta.image
    });

    // Set canonical URL separately using useHead
    if (meta.url) {
      useHead({
        link: [
          {
            rel: 'canonical',
            href: `${config.public.siteUrl}${meta.url}`
          }
        ]
      });
    }
  };

  const setDefaultSeo = () => {
    useSeoMeta({
      title: 'Blog App',
      description: 'A modern blog application built with Nuxt 3',
      ogTitle: 'Blog App',
      ogDescription: 'A modern blog application built with Nuxt 3',
      robots: 'index, follow',
      viewport: 'width=device-width, initial-scale=1',
      charset: 'utf-8'
    });
  };

  return {
    setSeoMeta,
    setDefaultSeo
  };
}; 