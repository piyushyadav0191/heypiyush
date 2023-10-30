import { IconPinnedFilled } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

import gradientDarkBackground from "@/assets/images/pinned-background-dark.png";
import gradientLightBackground from "@/assets/images/pinned-background-light.png";

const Pinned = () => {
  return (
    <div className="relative mb-12 overflow-hidden rounded-lg border px-4 py-6">
      <Image
        src={gradientLightBackground}
        alt="Gradient light background"
        className="absolute inset-0 -z-10 rounded-lg opacity-20 dark:hidden"
      />
      <Image
        src={gradientDarkBackground}
        alt="Gradient dark background"
        className="absolute inset-0 -z-10 hidden rounded-lg opacity-60 dark:block"
      />
      <div className="mb-3 flex items-center gap-2">
        <IconPinnedFilled className="rotate-45" />
        Pinned
      </div>
      <div>
        Hey there! You can check out more blog created by me by visiting my
        Medium profile. Thanks and here is{" "}
        <a
          className="font-bold"
          href="https://medium.com/@piyushyadav0191"
          target="_blank"
        >
          link
        </a>
      </div>
    </div>
  );
};

export default Pinned;
