import type { Metadata } from "next";

import Hero from "@/components/hero";
import site from "@/config/site";
import Skills from "@/components/Skills";

import Experience from "./experience/_components/Experience";

export const metadata: Metadata = {
  title: "Home | Piyush Yadav",
  robots: {index: true, follow: true},
    description:
    "Piyush Yadav is a full-stack developer in India. He is creative and passionate about design and technology so he always try to craft great-looking software products.",
  alternates: {
    canonical: site.url,
  },
  verification: {
      google: "ZVHdpcOY8zg5DAQZlbsfA-mNf9A8KxgWqtSMBmi_PV4"
    }
};

export const runtime = "edge";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Skills />
      
      <Experience />
    </>
  );
};

export default HomePage;
