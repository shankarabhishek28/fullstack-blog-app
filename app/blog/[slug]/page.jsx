import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// fetch single blog
async function getData(slug) {
  const query = `
    *[_type == "blog" && slug.current == $slug][0] {
      "currentSlug": slug.current,
      title,
      content,
      titleImage,
      category
    }
  `;
  return await client.fetch(query, { slug });
}

// fetch related blogs
async function getRelatedBlogs(category, slug) {
  const query = `
    *[_type == "blog" && category == $category && slug.current != $slug] 
    | order(_createdAt desc)[0...4] {
      "currentSlug": slug.current,
      title,
      smallDescription,
      titleImage
    }
  `;
  return await client.fetch(query, { category, slug });
}

// fetch other blogs if no related ones
async function getOtherBlogs(slug) {
  const query = `
    *[_type == "blog" && slug.current != $slug] 
    | order(_createdAt desc)[0...4] {
      "currentSlug": slug.current,
      title,
      smallDescription,
      titleImage
    }
  `;
  return await client.fetch(query, { slug });
}

export default async function BlogArticle({ params }) {
  const { slug } = params;

  const data = await getData(slug);
  if (!data) return <p className="text-center mt-20">Blog not found.</p>;

  const relatedBlogs = await getRelatedBlogs(data.category, slug);
  let fallbackBlogs = [];

  if (relatedBlogs.length === 0) {
    fallbackBlogs = await getOtherBlogs(slug);
  }

  return (
    <div className="max-w-6xl mx-auto mt-28 px-6 py-10">
      {/* Main blog */}
      <Card>
        <Image
          src={urlFor(data.titleImage).url()}
          alt={data.title}
          width={800}
          height={800}
          className="w-full h-[400px] object-cover rounded-t-md"
        />
        <CardContent className="py-6">
          <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
          <Separator className="my-4" />
          <div className="prose dark:prose-invert max-w-none">
            <PortableText value={data.content} />
          </div>
        </CardContent>
      </Card>

      {/* Related or fallback blogs */}
      <div className="mt-16">
        {relatedBlogs.length > 0 ? (
          <>
            <h2 className="text-2xl font-bold mb-6">More from {data.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((blog, idx) => (
                <Card key={idx}>
                  <Image
                    src={urlFor(blog.titleImage).url()}
                    alt={blog.title}
                    width={500}
                    height={500}
                    className="rounded-t-lg h-[200px] object-cover"
                  />
                  <CardContent className="mt-5">
                    <h3 className="text-lg line-clamp-2 font-bold">{blog.title}</h3>
                    <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                      {blog.smallDescription}
                    </p>
                    <Button asChild className="w-fit mt-4">
                      <Link href={`/blog/${blog.currentSlug}`}>Read More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <>
            <p className="text-lg font-medium mb-4 text-gray-600">
              No blogs from the same category. Check out other posts:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {fallbackBlogs.map((blog, idx) => (
                <Card key={idx}>
                  <Image
                    src={urlFor(blog.titleImage).url()}
                    alt={blog.title}
                    width={500}
                    height={500}
                    className="rounded-t-lg h-[200px] object-cover"
                  />
                  <CardContent className="mt-5">
                    <h3 className="text-lg line-clamp-2 font-bold">{blog.title}</h3>
                    <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                      {blog.smallDescription}
                    </p>
                    <Button asChild className="w-fit mt-4">
                      <Link href={`/blog/${blog.currentSlug}`}>Read More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
