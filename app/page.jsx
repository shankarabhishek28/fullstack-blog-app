import { client } from "./lib/sanity";
import BlogHome from "./component/BlogHome";

// export const revalidate = 60;

async function getBlogs() {
  const query = `
    *[_type == "blog"] 
    | order(_createdAt desc) {
      title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage,
      category
    }
  `;
  return await client.fetch(query);
}

export default async function Page() {
  const blogs = await getBlogs();
  const latestBlog = blogs.length > 0 ? blogs[0] : null;
  return <BlogHome blogs={blogs} latestBlog={latestBlog} />;
}
