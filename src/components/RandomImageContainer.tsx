"use client";

import { useState, useEffect } from "react";
import { images } from "@/lib/images";
import Image from "next/image";
import { Skeleton } from "./ui";

interface IImage {
  src?: string;
  alt?: string;
}

function ImageContainer() {
  const [image, setImage] = useState<IImage>({});

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setImage(images[randomIndex]);
  }, []);

  return (
    <div className="flex  flex-col items-center justify-center mb-8">
      {image.src ? (
        <>
          <div className="h-[280px] max-h-[280px] w-full border-2 bg-white">
            <Image
              src={image.src}
              width={290}
              height={270}
              alt={image.alt as string}
              className=" h-full w-full items-center rounded-md object-contain text-center"
            />
          </div>
          <div className="text-center">📷 {image.alt}</div>
        </>
      ) : (
        <Skeleton className="h-[270px] w-full rounded-md" />
      )}
    </div>
  );
}

export default ImageContainer;
