"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { client, urlFor } from "./lib/sanity";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const categories = [
  "Good News",
  "Our Picks",
  "Business",
  "Analysis",
  "World",
  "Politics",
  "Climate",
  "Entertainment",
  "Sport",
  "Technology",
  "Science",
];

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async (category) => {
    let query;
    let params = {};

    if (category) {
      // Filter ONLY by the selected category
      query = `
      *[_type == "blog" && category == $category] 
      | order(_createdAt desc) {
        title,
        smallDescription,
        "currentSlug": slug.current,
        titleImage
      }
    `;
      params = { category };
    } else {
      // Show all blogs, including ones with no category
      query = `
      *[_type == "blog"] 
      | order(_createdAt desc) {
        title,
        smallDescription,
        "currentSlug": slug.current,
        titleImage
      }
    `;
    }

    const data = await client.fetch(query.trim(), params);
    setBlogs(data);
  };



  useEffect(() => {
    fetchBlogs(selectedCategory || undefined);
  }, [selectedCategory]);

  return (
    <div className="mt-28">
      {/* Category Bar */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-md border transition-colors duration-200 ${selectedCategory === cat
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-gray-200"
              }`}
          >
            {cat}
          </button>
        ))}
        {/* Reset filter */}
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-md border transition-colors duration-200 ${!selectedCategory
            ? "bg-black text-white"
            : "bg-white text-black hover:bg-gray-200"
            }`}
        >
          All
        </button>
      </div>

      {/* Blogs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {blogs.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No blogs found for this category.
          </p>
        ) : (
          blogs.map((post, idx) => (
            <Card key={idx}>
              <Image
                src={urlFor(post.titleImage).url()}
                alt={post.title || "Blog image"}
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
                  <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </div>

    </div>
  );
}
