"use client"

import Link from "next/link";
import animationData from '@/utils/contact-animation.json'
import Lottie from 'lottie-react';


const Contact = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
  };


  
  return (
<div className="flex flex-col sm:flex-row items-center">
  <div className="sm:w-1/2 sm:pr-6">
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
      <div className="max-w-xs mb-2">
        <div className="flex flex-row gap-6">
          <p className="sm:text-lg">Email</p>
          <a
            href="mailto:piyushyadav0191@gmail.com?subject=Hi%20Piyush!"
            target="_blank"
            className="sm:text-lg text-gray-500 dark:text-gray-300 font-semibold hover:text-red-600"
          >
            piyushyadav0191@gmail.com
          </a>
        </div>
        <div className="flex flex-row gap-6">
          <p className="sm:text-lg">linkedin</p>
          <a
            href="https://www.linkedin.com/in/piyushyadav0191/"
            className="sm:text-lg text-gray-500 font-semibold dark:text-gray-300 hover:text-sky-600"
          >
            piyushyadav0191
          </a>
        </div>
        <div className="flex flex-row gap-6">
          <p className="sm:text-lg">Medium</p>
          <a
            href="https://medium.com/@piyushyadav0191"
            className="sm:text-lg text-gray-500 font-semibold dark:text-gray-300 hover:text-violet-600"
          >
            piyushyadav0191
          </a>
        </div>
        <div className="flex flex-row gap-6">
          <p className="sm:text-lg">Ask me Anything</p>
          <a
            href="https://github.com/piyushyadav0191"
            className="sm:text-lg text-gray-500 dark:text-gray-300 font-semibold hover:text-pink-600"
          >
            on Github
          </a>
        </div>
      </div>
    </div>
  </div>

  <div className="hidden md:flex">
    <Lottie
      animationData={animationData}
      autoplay={true}
      loop={true}
      height={400}
      width={400}
    />
  </div>
</div>

  );
};

export default Contact;
