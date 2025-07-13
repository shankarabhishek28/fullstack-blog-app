import React from "react";
import Image from "next/image";
import { client } from "./lib/sanity";
import { simpleBlogCard } from "./lib/interface";
import { urlFor } from "./lib/sanity"; // make sure this is exported from your sanity.ts
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export async function getData() {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
      title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage,
    }
  `;

  const data = await client.fetch(query);
  return data;
}

const Page = async () => {
  const blogData: simpleBlogCard[] = await getData();

  return (
     <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-8 ">
    {blogData.map((post, idx) => (
      <Card className="" key={idx}>
        <Image
          src={urlFor(post.titleImage).url()}
          alt={
            typeof post.titleImage?.alt === "string"
              ? post.titleImage.alt
              : post.title || "Blog image"
          }
          width={500}
          height={500}
          className="rounded-t-lg h-[200px] object-cover"
        />
        <CardContent className="mt-5">
          <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
          <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
            {post.smallDescription}
          </p>
          <Button asChild className="w-fit mt-4">
            <Link className="dark:text-white" href={`/blog/${post.currentSlug}`}>Read More</Link>
          </Button>
        </CardContent>
      </Card>
    ))}
  </div>
  );
};

export default Page;
