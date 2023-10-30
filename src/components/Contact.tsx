import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Contact = () => {
  return (
    <div>
      <p className="sm:text-lg">
        I'm always open to chat, so please don't hesitate contacting me! <br />{" "}
        <br />
        Anyways, please
        <Link href={"https://nohello.net/"} className="text-blue-600">
          {" "}
          don't just say hello.
        </Link>
      </p>
      <div className="cc-bg blur-background mx-auto mt-8 w-4/5 w-full rounded-lg border bg-transparent p-8 text-white shadow-lg md:max-w-4xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="mb-2 text-2xl font-bold text-black dark:text-white">
              Piyush Yadav
            </h2>
            <p className="mb-4 text-sm text-black dark:text-white">
              Software Engineer
            </p>
            <button className="rounded border bg-inherit px-4 py-2 text-black shadow transition-colors duration-200 hover:bg-gray-100 hover:text-sky-500 dark:text-white">
              <Link
                href={`${process.env.NEXTAUTH_URL}/pdf/resume.pdf`}
                target="_blank"
              >
                Resume
              </Link>
            </button>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/piyushyadav0191"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-200 "
            >
              <IconBrandGithub size={44} color="red" />
            </a>
            <a
              href="https://www.linkedin.com/in/piyushyadav0191"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-200"
            >
              <IconBrandLinkedin size={44} color="cyan" />
            </a>
            <a
              href="https://instagram.com/piyush.0191"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-200"
            >
              <IconBrandInstagram size={44} color="yellow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
