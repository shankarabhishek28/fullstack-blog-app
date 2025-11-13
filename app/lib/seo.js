export const defaultSEO = {
  title: 'Today at USA | Latest Insights & Updates',
  description: 'Discover expert articles, guides, and stories on our Next.js blog.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.todayatusa.com',
    siteName: 'Today at USA',
    images: [
      {
        url: '/blogLogo.png',
        width: 1200,
        height: 630,
        alt: 'Today at USA',
      },
    ],
  },
  twitter: {
    handle: '@yourhandle',
    site: '@yourhandle',
    cardType: 'summary_large_image',
  },
};

/**
 * Generate SEO metadata for a blog post
 * @param {Object} post - Blog post data
 * @param {string} post.title - Post title
 * @param {string} post.smallDescription - Post description
 * @param {string} post.titleImage - Post image
 * @param {string} post.currentSlug - Post slug
 * @param {string} post.category - Post category
 * @param {string} post._createdAt - Post creation date
 * @returns {Object} SEO metadata object
 */
export function generatePostSEO(post) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.todayatusa.com';
  const imageUrl = post.titleImage 
    ? (typeof post.titleImage === 'string' 
        ? post.titleImage 
        : post.titleImage.url || '/blogLogo.png')
    : `${siteUrl}/blogLogo.png`;

  return {
    title: `${post.title} | Your Blog Name`,
    description: post.smallDescription || 'Read our latest blog post',
    openGraph: {
      type: 'article',
      url: `${siteUrl}/blog/${post.currentSlug}`,
      title: post.title,
      description: post.smallDescription || 'Read our latest blog post',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post._createdAt || new Date().toISOString(),
      section: post.category || 'General',
      tags: post.category ? [post.category] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.smallDescription || 'Read our latest blog post',
      image: imageUrl,
    },
    alternates: {
      canonical: `${siteUrl}/blog/${post.currentSlug}`,
    },
  };
}

/**
 * Generate JSON-LD structured data for a blog post
 * @param {Object} post - Blog post data
 * @param {string} post.title - Post title
 * @param {string} post.titleImage - Post image
 * @param {string} post.currentSlug - Post slug
 * @param {string} post._createdAt - Post creation date
 * @param {string} post.author - Post author (optional)
 * @returns {Object} JSON-LD object
 */
export function generatePostJSONLD(post) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.todayatusa.com';
  const imageUrl = post.titleImage 
    ? (typeof post.titleImage === 'string' 
        ? post.titleImage 
        : post.titleImage.url || `${siteUrl}/blogLogo.png`)
    : `${siteUrl}/blogLogo.png`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: imageUrl,
    datePublished: post._createdAt || new Date().toISOString(),
    dateModified: post._updatedAt || post._createdAt || new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: post.author || 'Your Blog Name',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Your Blog Name',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/blogLogo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${post.currentSlug}`,
    },
    description: post.smallDescription || 'Read our latest blog post',
  };
}

