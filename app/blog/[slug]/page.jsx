import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
// export const revalidate = 3600
async function getData(slug) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}'][0] {
      "currentSlug": slug.current,
      title,
      content,
      titleImage
    }
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}) {
    const { slug } = await params;
  
  // Then fetch data
  const data = await getData(slug);

  if (!data) return notFound();

  return (
    <div className="max-w-6xl mx-auto mt-28 px-6 py-10">
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
    </div>
  );
}
