import type { Image as SanityImage } from 'sanity';
import { TypedObject } from "sanity";

export interface simpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: SanityImage;
}
export interface fullBlog {
  title: string;
  content: TypedObject[];
  currentSlug: string;
  titleImage: SanityImage;
}