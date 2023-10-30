import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { allProjects } from "@/content/AllProject";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="my-16 flex flex-col">
      <h2 className="mb-8 text-3xl font-bold">Projects</h2>
      <div className="flex flex-col gap-8">
        {allProjects.slice(0, 3).map((project) => {
          const { id, icon, name, description } = project;
          return (
            <Link
              key={id}
              href={`/projects/${id}`}
              className="flex w-full flex-1 items-center justify-start rounded-lg border p-4 transition-colors duration-150 hover:border-foreground sm:px-6"
            >
              <Image
                src={icon}
                width={40}
                height={40}
                alt=""
                className=" dark:bg-white"
              />
              <div className="px-4">
                <div className="font-bold">{name}</div>
                <p>{description}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex">
        <Link
          href="/projects"
          className="group my-8 flex items-center gap-4 text-lg font-medium"
        >
          <span>All Projects</span>
          <IconArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
