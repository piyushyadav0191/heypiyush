import type { Metadata, ResolvingMetadata } from "next";

import FilteredPosts from "@/components/filtered-posts";
import PageTitle from "@/components/page-title";
import site from "@/config/site";
import Pinned from "./pinned";
import { getMediumPosts,  } from "@/utils/medium";

export const runtime = "edge";
const title = "Blog";
const description =
  "My personal website and blog where I share my thoughts on various topics including tutorials, notes, and personal experiences. As a full-stack developer from India. I use Next.js for building websites, GitHub for code hosting, and Vercel for deployment. Explore my site to learn more about my Journey and discover some of the web development resources that have inspired me.";

/**
 * The props of {@link BlogPage}.
 */
type BlogPageProps = {
  /**
   * The params of the URL.
   */
  params: Record<string, never>;
  /**
   * The search params of the URL.
   */
  searchParams: Record<string, never>;
};

export const generateMetadata = async (
  _: BlogPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent)?.openGraph ?? {};
  const previousTwitter = (await parent)?.twitter ?? {};

  return {
    title,
    description,
    alternates: {
      canonical: `${site.url}/blog`,
    },
    openGraph: {
      ...previousOpenGraph,
      url: `${site.url}/blog`,
      title,
      description,
    },
    twitter: {
      ...previousTwitter,
      title,
      description,
    },
  };
};



const BlogPage = async () => {
   const posts = await getMediumPosts();
  //  const totalPosts = posts.length;

  return (
    <>
      <PageTitle
        title="Blog"
        description={`I started writing articles in December 2021, mainly about software and
        sharing knowledge. You can search for articles by title in the search box below.`}
      />
      <FilteredPosts posts={posts} />
      <div className="mt-10">
        <Pinned />
      </div>
    </>
  );
};

export default BlogPage;
