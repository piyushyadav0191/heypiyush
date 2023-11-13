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
      <br />

      <div>
        <p className="sm:text-lg">There's a few ways you can get it touch:</p>
        <br />
        <div className="flex justify-between items-center  flex-row gap-6 max-w-xs mb-2">
          <div className="flex flex-row gap-6">
            <p className="sm:text-lg">Email</p>
          </div>
          <div className="flex flex-row gap-6">
            <a
              href="mailto:piyushyadav0191@gmail.com?subject=Hi%20Piyush!"
              target="_blank"
              className="sm:text-lg text-gray-600 font-semibold hover:text-red-600"
            >
              piyushyadav0191@gmail.com
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center  flex-row gap-6 max-w-xs mb-2">
          <div className="flex flex-row gap-6">
            <p className="sm:text-lg">linkedin</p>
          </div>
          <div className="flex flex-row gap-6">
            <a
              href="https://www.linkedin.com/in/piyushyadav0191/"
              className="sm:text-lg text-gray-600 font-semibold hover:text-sky-600"
            >
              piyushyadav0191
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center  flex-row gap-6 max-w-xs mb-2">
          <div className="flex flex-row gap-6">
            <p className="sm:text-lg">Medium</p>
          </div>
          <div className="flex flex-row gap-6">
            <a
              href="https://medium.com/@piyushyadav0191"
              className="sm:text-lg text-gray-600 font-semibold hover:text-violet-600"
            >
              piyushyadav0191
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center  flex-row gap-6 max-w-xs mb-2">
          <div className="flex flex-row gap-6">
            <p className="sm:text-lg">Ask me Anything</p>
          </div>
          <div className="flex flex-row gap-6">
            <a
              href="https://github.com/piyushyadav0191"
              className="sm:text-lg text-gray-600 font-semibold hover:text-pink-600"
            >
              on Github
            </a>
          </div>
        </div>
      </div>

      <div className="cc-bg blur-background mx-auto mt-12 w-4/5 w-full rounded-lg border bg-transparent p-8 text-white shadow-lg ">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="mb-2 text-2xl font-bold text-black dark:text-white">
              Piyush Yadav
            </h2>
            <p className="mb-4 text-sm text-black dark:text-white">
              Software Engineer
            </p>
            <button className="rounded border bg-inherit px-4 py-2 text-black shadow transition-colors duration-200 hover:bg-gray-100 hover:text-sky-500 dark:text-white dark:hover:text-black">
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
