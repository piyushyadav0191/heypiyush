import type { Metadata } from "next";

import Hero from "@/components/hero";
import Projects from "@/components/projects";
import site from "@/config/site";
import Skills from "@/components/Skills";
import BlogPostMainPage from "@/components/BlogPostMainPage";
import { allBlogs } from "@/content/AllBlogs";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

export const metadata: Metadata = {
  alternates: {
    canonical: site.url,
  },
};

export const runtime = "edge";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <h2 className="mb-8 text-3xl font-bold">Posts</h2>

      <div className="grid gap-4">
        {allBlogs.length > 0 &&
          allBlogs.slice(0, 3).map((blog) => (
            <div className="group flex flex-col" data-testid="post-cards">
              <BlogPostMainPage key={blog._id} blog={blog} />
            </div>
          ))}
      </div>

      <div className="flex">
        <Link
          href="/blog"
          className="group my-8 flex items-center gap-4 text-lg font-medium"
        >
          <span>All Posts</span>
          <IconArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </>
  );
};

export default HomePage;
