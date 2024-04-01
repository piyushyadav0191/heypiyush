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
      <section>
      <div className="prose prose-neutral dark:prose-invert">
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Codemate</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          SDE - I - Full Stack Engineer - Nov 2023 - Present
        </p>
        <ul>
          <li>
          Designed and implemented full-stack services using Node.js, Flask, and Azure, enhancing the functionality and reliability of the system
          </li>
          <li>
          Collaborated with cross-functional teams to create a user-friendly dashboard, integrating front-end with OpenAI and ensuring seamless back-end functionality.
          </li>
          <li>
          Conducted regular code reviews, providing constructive feedback to maintain high code quality standards, and ensuring scalability and maintainability
          </li>
        </ul>
      
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">One Oath</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Full Stack Developer Intern - July 2023 - Oct 2023
        </p>
        <ul>
          <li>
          Spearheaded the development of microservices and user interface components, resulting in a 30% increase in user engagement for the client’s personality development system.
          </li>
          <li>
          Developed a CI/CD workflow to automatically perform a set of actions daily on a product in development in order to decrease time needed for team members to identify and fix bugs/issues.
          </li>
          <li>
          Collaborated closely with the AI core team to strategically integrate Python backend components, ensuring the seamless operation of critical system functions.
          </li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">AAA Intergalactic – Infrastructure</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        Web Developer Intern - April 2023 - July 2023
        </p>
        <ul>
          <li>
          Orchestrated the creation of static websites for clients, accompanied by the development of microservices for seamless website operation
          </li>
          <li>
          Played a pivotal role in shaping architecture plans, UI designs, and feature development, contributing to a 15% increase in project success rate
          </li>
          <li>
          Drove the development of static websites and streamlined microservices, leading to a remarkable 20% decrease in project timelines
          </li>
        </ul>
      </div>
    </section>
    </>
  );
};

export default Experience;
