interface Project {
  id: string;
  type: "Project";
  name: string;
  description: string;
  homepage?: string | undefined;
  github: string;
  icon: string;
  image: string;
  repo: string;
  techstack: Techstack[];
}

interface Techstack {
  id: string;
  type: "Techstack";
  label: string;
}

export const allProjects: Project[] = [
  {
    id: "1",
    type: "Project",
    name: "Medium",
    description: "Full stack Native app + Admin Dashboard to Publish your Courses + Live Courses + All Feature a App should have",
    homepage: "",
    github: "https://github.com/piyushyadav0191/medium",
    icon: "/images/projects/icons/blog.png",
    image: "/images/projects/medium.jpg",
    repo: "medium",
    techstack: [
      {
        id: "1",
        type: "Techstack",
        label: "React Native",
      },
      {
        id: "2",
        type: "Techstack",
        label: "Typescript",
      },
      {
        id: "3",
        type: "Techstack",
        label: "NodeJS",
      },
      {
        id: "4",
        type: "Techstack",
        label: "Express",
      },
      {
        id: "5",
        type: "Techstack",
        label: "Nextjs",
      },
      {
        id: "6",
        type: "Techstack",
        label: "Redux",
      },
      {
        id: "7",
        type: "Techstack",
        label: "MongoDB",
      },
    ],
  },
  {
    id: "2",
    type: "Project",
    name: "Practitioner",
    description: "Prepare with our expert-led mock interviews and get personalized feedback to land your dream job.",
    homepage: "https://practitioner-interview.vercel.app/",
    github: "hhttps://github.com/piyushyadav0191/Practitioner",
    icon: "/images/projects/icons/blog.png",
    image: "/images/projects/prac.png",
    repo: "Practitioner",
    techstack: [
      {
        id: "1",
        type: "Techstack",
        label: "Nextjs",
      },
      {
        id: "2",
        type: "Techstack",
        label: "Google Speech API",
      },
      {
        id: "3",
        type: "Techstack",
        label: "NodeJS",
      },
      {
        id: "4",
        type: "Techstack",
        label: "Express",
      },
      {
        id: "5",
        type: "Techstack",
        label: "Drizzle ORM",
      },
      {
        id: "6",
        type: "Techstack",
        label: "Tailwind CSS",
      },
      {
        id: "7",
        type: "Techstack",
        label: "PostgreSQL",
      },
      {
        id: "8",
        type: "Techstack",
        label: "Gemini AI",
      },
    ],
  },
  {
    id: "3",
    type: "Project",
    name: "ToJSON",
    description: "The Easiest way to communicate with your any Data with any Data type with the help of AI. We convert your Important data to JSON format. ",
    homepage: "https://to-json.vercel.app/",
    github: "https://github.com/piyushyadav0191/To-JSON",
    icon: "/images/projects/icons/blog.png",
    image: "/images/projects/json.png",
    repo: "To-JSON",
    techstack: [
      {
        id: "1",
        type: "Techstack",
        label: "NextJS",
      },
      {
        id: "2",
        type: "Techstack",
        label: "Typescript",
      },
      {
        id: "3",
        type: "Techstack",
        label: "NodeJS",
      },
      {
        id: "4",
        type: "Techstack",
        label: "Express",
      },
      {
        id: "5",
        type: "Techstack",
        label: "Clerk",
      },
      {
        id: "6",
        type: "Techstack",
        label: "Replicate AI",
      },
      {
        id: "7",
        type: "Techstack",
        label: "langchain",
      },
      {
        id: "8",
        type: "Techstack",
        label: "Redis",
      },
    ],
  },
  {
    id: "4",
    type: "Project",
    name: "Research PDFs Decoder",
    description: "Research Pdf Decoder is a Full Stack side project which focus on extracting important notes from any Research papers PDF. It also capable of chatting with PDFs",
    homepage: "",
    github: "https://github.com/piyushyadav0191/Research-PDFs-Decoder",
    icon: "/images/projects/icons/blog.png",
    image: "/images/projects/pdf.png",
    repo: "Research-PDFs-Decoder",
    techstack: [
      {
        id: "1",
        type: "Techstack",
        label: "NextJS",
      },
      {
        id: "2",
        type: "Techstack",
        label: "Typescript",
      },
      {
        id: "3",
        type: "Techstack",
        label: "NodeJS",
      },
      {
        id: "4",
        type: "Techstack",
        label: "Express",
      },
      {
        id: "5",
        type: "Techstack",
        label: "Open AI",
      },
      {
        id: "6",
        type: "Techstack",
        label: "Docker",
      },
      {
        id: "7",
        type: "Techstack",
        label: "langchain",
      },
      {
        id: "8",
        type: "Techstack",
        label: "Supabase",
      },
    ],
  },
  {
    id: "5",
    type: "Project",
    name: "keepDraw",
    description: "KeepDraw is a typescript powered Full Stack Application where user can create real time Boards and draw on it with their organization's members",
    homepage: "https://keep-draw.vercel.app/",
    github: "https://github.com/piyushyadav0191/KeepDraw",
    icon: "/images/projects/icons/farewello.png",
    image: "/images/projects/draw.png",
    repo: "keepDraw",
    techstack: [
      {
        id: "1",
        type: "Techstack",
        label: "NextJS",
      },
      {
        id: "2",
        type: "Techstack",
        label: "Typescript",
      },
      {
        id: "3",
        type: "Techstack",
        label: "Shadcn UI",
      },
      {
        id: "4",
        type: "Techstack",
        label: "Clerk",
      },
      {
        id: "5",
        type: "Techstack",
        label: "LiveBlocks",
      },
      {
        id: "6",
        type: "Techstack",
        label: "Convex",
      },
      {
        id: "7",
        type: "Techstack",
        label: "Zunstand",
      },
      {
        id: "8",
        type: "Techstack",
        label: "TailwindCSS",
      },
      {
        id: "9",
        type: "Techstack",
        label: "Plausible",
      },
    ],
  },
  {
    id: "6",
    type: "Project",
    name: "AI Formulator",
    description: "Create your forms in seconds with the help of AI",
    homepage: "https://aiformulator.vercel.app/",
    github: "https://github.com/piyushyadav0191/AI-Formulator",
    icon: "/images/projects/icons/reform.png",
    image: "/images/projects/formulator.png",
    repo: "AI-Formulator",
    techstack: [
      {
        id: "1",
        type: "Techstack",
        label: "NextJS + TS + Node",
      },
      {
        id: "2",
        type: "Techstack",
        label: "TailwindCSS",
      },
      {
        id: "3",
        type: "Techstack",
        label: "Shadcn UI",
      },
      {
        id: "4",
        type: "Techstack",
        label: "Next Auth",
      },
      {
        id: "5",
        type: "Techstack",
        label: "Open AI",
      },
      {
        id: "6",
        type: "Techstack",
        label: "Drizzle",
      },
      {
        id: "7",
        type: "Techstack",
        label: "PostgreSQL",
      },
      {
        id: "8",
        type: "Techstack",
        label: "Stripe",
      },
      {
        id: "9",
        type: "Techstack",
        label: "Plausible",
      },
    ],
  },
  {
    id: "7",
    type: "Project",
    name: "Reform",
    description:
      "Create and share form easily with beautiful webflow prototype feature",
    homepage: "https://reform-rosy.vercel.app",
    github: "https://github.com/piyushyadav0191/Reform",
    icon: "/images/projects/icons/reform.png",
    image: "/images/projects/reform.png",
    repo: "Reform",
    techstack: [
      {
        id: "1",
        type: "Techstack",
        label: "NextJS + TS + Node",
      },
      {
        id: "2",
        type: "Techstack",
        label: "TailwindCSS",
      },
      {
        id: "3",
        type: "Techstack",
        label: "DnD Kit",
      },
      {
        id: "4",
        type: "Techstack",
        label: "Server Actions",
      },
      {
        id: "5",
        type: "Techstack",
        label: "Vercel Postgres",
      },
      {
        id: "6",
        type: "Techstack",
        label: "Prisma",
      },
    ],
  },
  
  {
    id: "8",
    type: "Project",
    name: "Quesgen Pro",
    description:
      "QuesGen Pro is a platform designed to facilitate the taking of tests, whether they are multiple-choice (MCQ) or open-ended questions, with the assistance of AI.",
    homepage: "https://quesgen-pro.vercel.app/",
    github: "https://github.com/piyushyadav0191/QuesGen-Pro",
    icon: "/images/projects/icons/edit.png",
    image: "/images/projects/quesgen.png",
    repo: "QuesGen-Pro",
    techstack: [
      {
        id: "1",
        type: "Techstack",
        label: "NextJS + TS + Node",
      },
      {
        id: "2",
        type: "Techstack",
        label: "TailwindCSS",
      },
      {
        id: "3",
        type: "Techstack",
        label: "Shadcn UI",
      },
      {
        id: "4",
        type: "Techstack",
        label: "Framer motion",
      },
      {
        id: "5",
        type: "Techstack",
        label: "GraphQL",
      },
      {
        id: "6",
        type: "Techstack",
        label: "OpenAI",
      },
      {
        id: "7",
        type: "Techstack",
        label: "Prisma",
      },
      {
        id: "8",
        type: "Techstack",
        label: "Sanity",
      },
    ],
  },
  {
    id: "9",
    type: "Project",
    name: "Code with us Editor",
    description:
      "Where you can Write your code with your friends with syncing feature and compile your code with given compiler",
    homepage: "https://codewithus.vercel.app/",
    github: "https://github.com/piyushyadav0191/Code-with-us-Editor",
    icon: "/images/projects/icons/code.png",
    image: "/images/projects/code.png",
    repo: "Code-with-us-Editor",
    techstack: [
      {
        id: "1",
        type: "Techstack",
        label: "ReactJS",
      },
      {
        id: "2",
        type: "Techstack",
        label: "NodeJS",
      },
      {
        id: "3",
        type: "Techstack",
        label: "SocketIO",
      },
      {
        id: "4",
        type: "Techstack",
        label: "Express",
      },
    ],
  },
];
