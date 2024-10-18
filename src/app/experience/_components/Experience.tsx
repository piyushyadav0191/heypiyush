"use client";
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
          Software Engineer - Full Stack Engineer - Sep 2023 - Present
        </p>
        <ul>
          <li>
          Led the design and development of full-stack services for the Tech Innovation Group, enhancing system functionality and reliability using Next.js, Node.js, Langchain, Flask, Azure and Redis.
          </li>
          <li>
          Designed and implemented user-friendly dashboards, integrating front-end interfaces with Generative AI models and ensuring seamless back-end functionality, driving substantial user engagement and satisfaction.
          </li>
          <li>
          Collaborated with cross-functional teams to gather system requirements, balance workloads, and oversee the end-to-end software development lifecycle from implementation to deployment.
          </li>
          <li>
          Established robust CI/CD pipelines, conducted pull requests, and performed code reviews, ensuring high standards of code quality, scalability, and maintainability through rigorous testing (unit, integration, and end-to-end testing).
          </li>
        </ul>
      
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">One Oath</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Full Stack Developer Intern - June 2023 - Aug 2023
        </p>
        <ul>
          <li>
        Spearheaded the development of microservices using Node.js, Python, Open AI for the client’s personality development system.
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
        Web Developer Intern - March 2023 - May 2023
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
