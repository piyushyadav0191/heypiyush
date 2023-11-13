import { type IconDescriptor } from "next/dist/lib/metadata/types/metadata-types";

/**
 * Site configuration.
 */
type Site = {
  /**
   * The URL of the website.
   */
  url: string;
  /**
   * The title of the website.
   */
  title: string;
  /**
   * The name of the website.
   */
  name: string;
  /**
   * The keywords of the website.
   */
  keywords: string[];
  /**
   * The title template of the website.
   * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#template
   */
  titleTemplate: string;
  /**
   * The description of the website.
   */
  description: string;
  /**
   * The GitHub username of the website.
   */
  githubUsername: string;
  /**
   * The favicons of the website.
   */
  favicons: IconDescriptor[];
};

const prodBaseURL = "https://heypiyush.vercel.app";
const devBaseURL = "http://localhost:3000";

const site: Site = {
  url: "https://heypiyush.vercel.app",
  title: "Piyush Yadav",
  name: "Piyush Yadav",
  keywords: ["piyushyadav0191", "Next.js", "React", "TypeScript", "Node.js"],
  titleTemplate: "- Piyush Yadav",
  description: "Piyush  • Student • Full-stack Developer",
  githubUsername: "piyushyadav0191",
  favicons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/logo.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/logo.png",
    },
  ],
};

export default site;
