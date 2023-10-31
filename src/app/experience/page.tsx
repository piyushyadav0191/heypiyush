import PageTitle from "@/components/page-title";
import Experience from "./_components/Experience";

const page = () => {
  return (
    <>
      <PageTitle
        title="Things I’ve done trying to put my dent in the universe."
        description="I have never designed databases before, but I have worked with them. I don't think you should hire me for my database design skills, but I'm sure I'm a great developer. I've been coding for a long time, and my mom says I'm pretty good at it."
      />
      <Experience />
    </>
  );
};

export default page;
