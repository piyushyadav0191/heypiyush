"use client";

import { experiences, siteMetadata } from "@/content/AllExperience";
import { Card } from "./Card";
import Image from "next/image";
import { IconLink } from "@tabler/icons-react";
import React from "react";

const Experience = () => {
  return (
    <>
      <h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
        Work Experience
      </h2>
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {experiences.length > 0 &&
          experiences.map((experience, index) => (
            <Card key={index}>
              <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={experience.logo}
                  alt={experience.company}
                  className="w-8 h-8"
                  width={32}
                  height={32}
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={experience.link.url}>
                  {experience.title} at {experience.company}
                </Card.Link>
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {experience.date}
              </p>
              <div className="relative z-10 mt-2 text-sm text-zinc-700 dark:text-zinc-400">
                {experience.description.map((item, index) => (
                  <li className="ml-4 list-disc" key={`description-${index}`}>
                    {item}
                  </li>
                ))}
              </div>
              <p className="relative z-10 flex mt-6 text-sm font-medium transition text-zinc-400 group-hover:text-sky-500 dark:text-zinc-200">
                <IconLink className="flex-none w-6 h-6" />
                <span className="ml-2">{experience.link.label}</span>
              </p>
            </Card>
          ))}
      </ul>

      <div className="relative max-w-lg mx-auto mt-24 lg:max-w-7xl">
        <div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            Education
          </h2>
        </div>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {siteMetadata.experience.education.map((item, index) => (
            <Card key={`education-${index}`}>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {item.startDate} - {item.endDate}
              </p>
              <div className="block mt-2">
                <p className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                  {item.degree}
                </p>
                <p className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  {item.schoolName}
                </p>
                <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
