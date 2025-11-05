import { client } from './lib/sanity';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.todayatusa.com';

// Fetch all blog posts
async function getAllBlogs() {
  const query = `
    *[_type == "blog"] {
      "currentSlug": slug.current,
      _updatedAt,
      category
    }
  `;
  return await client.fetch(query);
}

// Fetch all static pages
function getStaticPages() {
  return [
    { path: '', priority: 1.0, changefreq: 'daily' },
    { path: '/about-us', priority: 0.8, changefreq: 'monthly' },
    { path: '/privacy-policy', priority: 0.5, changefreq: 'yearly' },
    { path: '/terms', priority: 0.5, changefreq: 'yearly' },
  ];
}

export default async function sitemap() {
  // Get all blogs
  const blogs = await getAllBlogs();
  
  // Generate blog post URLs
  const blogUrls = blogs.map((blog) => ({
    url: `${siteUrl}/blog/${blog.currentSlug}`,
    lastModified: blog._updatedAt || new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Generate category pages (if needed)
  const categories = [...new Set(blogs.map((blog) => blog.category).filter(Boolean))];
  const categoryUrls = categories.map((category) => ({
    url: `${siteUrl}/category/${encodeURIComponent(category)}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: 0.6,
  }));

  // Get static pages
  const staticPages = getStaticPages();
  const staticUrls = staticPages.map((page) => ({
    url: `${siteUrl}${page.path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: page.changefreq,
    priority: page.priority,
  }));

  // Combine all URLs
  return [...staticUrls, ...blogUrls, ...categoryUrls];
}

