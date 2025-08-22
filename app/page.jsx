"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { client, urlFor } from "./lib/sanity";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
const categ = ["Business",
  "Analysis",
  "World",
  "Politics",
  "Climate",
  "Entertainment",
  "Sport",
  "Technology",
  "Science",]

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [latestBlog, setLatestBlog] = useState(null);
  const router = useRouter();
  const fetchBlogs = async (category) => {
    let query;
    let params = {};

 
      query = `
        *[_type == "blog"] 
        | order(_createdAt desc) {
          title,
          smallDescription,
          "currentSlug": slug.current,
          titleImage
        }
      `;
    

    const data = await client.fetch(query.trim(), params);
    setBlogs(data);

    // If no category, set first blog as hero
    if (!category && data.length > 0) {

      setLatestBlog(data[0]);
    }
  };
  const handleCardClick = async (cat) => {
    setSelectedCategory(cat);

    const query = `
    *[_type == "blog" && category == $category] 
    | order(_createdAt desc) {
      "currentSlug": slug.current
    }[0]
  `;
    const topBlog = await client.fetch(query, { category: cat });
    console.log("TB",topBlog)
    if (topBlog) {
      router.push(`/blog/${topBlog.currentSlug}`);
    }
  };

  useEffect(() => {
    fetchBlogs(selectedCategory || undefined);
  }, [selectedCategory]);
  console.log(selectedCategory)
  console.log(blogs)
  return (
    <div className="mt-24">
      {/* Horizontal Category Slider */}
      <div className="overflow-x-auto whitespace-nowrap border-b pb-3 mb-6">
        <div className="flex gap-4 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCardClick(cat)}
              className={`px-4 py-2 rounded-md border shrink-0 ${selectedCategory === cat
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-200"
                }`}
            >
              {cat}
            </button>
          ))}
          {/* <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-md border shrink-0 ${!selectedCategory
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-gray-200"
              }`}
          >
            All
          </button> */}
        </div>
      </div>

      {/* Main Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 mb-10">
        {/* Left big feature */}
        {latestBlog && (
          <div className="md:col-span-1 bg-black text-white rounded-lg overflow-hidden relative">
            <Image
              src={urlFor(latestBlog.titleImage).url()}
              alt={latestBlog.title}
              width={800}
              height={600}
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="relative p-6">
              <h2 className="text-2xl font-bold">morning edition</h2>
              <p className="text-sm text-gray-200 mb-2">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}
              </p>
              <p className="mb-4 line-clamp-4">{latestBlog.smallDescription}</p>
              <Button asChild className="bg-orange-500 hover:bg-orange-600">
                <Link href={`/blog/${latestBlog.currentSlug}`}>
                  READ TODAY’S EDITION
                </Link>
              </Button>
            </div>
          </div>
        )}

        {/* Right category blocks */}
        <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {categ.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => handleCardClick(cat)}
              className="cursor-pointer flex items-center justify-center h-32 rounded-lg text-white font-semibold"
              style={{
                backgroundColor:
                  idx % 4 === 0
                    ? "#f97316" // orange
                    : idx % 4 === 1
                      ? "#4b5563" // gray
                      : idx % 4 === 2
                        ? "#1e293b" // dark blue
                        : "#000", // black
              }}
            >
              {cat}
            </div>
          ))}
        </div>
      </div>

      {/* Blogs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
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
