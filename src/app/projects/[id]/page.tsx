import { allProjects } from "@/content/AllProject";
import { notFound } from "next/navigation";

import Image from "@/components/mdx/image";

import Header from "./header";

export const runtime = "edge";

/**
 * The props of {@link ProjectPage}.
 */
type ProjectPageProps = {
  /**
   * The params of the URL.
   */
  params: Promise<{
    /**
     * The slug of the URL.
     */
    id: number;
  }>;
  /**
   * The search params of the URL.
   */
};

const ProjectPage = async (props: ProjectPageProps) => {
  const { id } = (await props.params);

  const project = allProjects.find((p) => p.id === id.toString());

  if (!project) {
    notFound();
  }

  const { name, image } = project;

  return (
    <>
      <Header {...project} />
      <Image
        src={image}
        width={1200}
        height={630}
        alt={name}
        className="my-12 rounded-lg border"
      />
    </>
  );
};

export default ProjectPage;
