"use client"

import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";

const Contact = () => {
  const { theme } = useTheme()
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
              className="sm:text-lg text-gray-600 dark:text-gray-300 font-semibold hover:text-red-600"
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
              className="sm:text-lg text-gray-600 font-semibold dark:text-gray-300 hover:text-sky-600"
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
              className="sm:text-lg text-gray-600 font-semibold dark:text-gray-300 hover:text-violet-600"
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
              className="sm:text-lg text-gray-600 dark:text-gray-300 font-semibold hover:text-pink-600"
            >
              on Github
            </a>
          </div>
        </div>
      </div>

      {/* form  */}
    </div>
  );
};

export default Contact;
