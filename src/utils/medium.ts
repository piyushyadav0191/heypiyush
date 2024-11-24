// utils/medium.ts

import { cache } from "react";
import { XMLParser } from "fast-xml-parser";

export type MediumPost = {
  _id: number;
  title: string;
  link: string;
  summary: string;
  imageSrc: string;
  date: string;
};

const MEDIUM_USERNAME = "piyushyadav0191";

export const getMediumPosts = cache(async (): Promise<MediumPost[]> => {
  try {
    const response = await fetch(
      `https://medium.com/feed/@${MEDIUM_USERNAME}`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    const xml = await response.text();

    // Parse XML using fast-xml-parser
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
    });

    const result = parser.parse(xml);
    const items = result.rss.channel.item;

    const posts: MediumPost[] = items.map((item: any, index: number) => {
      // Extract first image from content if available
      const content = item["content:encoded"] || "";
      const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
      const defaultImage = "/images/blog/default.webp";

      // Clean up description by removing HTML tags
      const cleanDescription = item.description
        .replace(/<[^>]*>/g, "") // Remove HTML tags
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
        .trim();

      return {
        _id: index + 1,
        title: item.title || "",
        link: item.link || "",
        summary: cleanDescription.slice(0, 200) + "...",
        imageSrc: imgMatch ? imgMatch[1] : defaultImage,
        date: new Date(item.pubDate || "").toISOString(),
      };
    });

    return posts;
  } catch (error) {
    console.error("Error fetching Medium posts:", error);
    return [];
  }
});
