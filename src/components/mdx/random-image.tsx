"use client";

import { useState, useEffect } from "react";
import { images } from "@/lib/images";
import Image from "next/image";
import { Skeleton } from "../ui";

interface IImage {
  src?: string;
  alt?: string;
}

function ImageContainer() {
  const [image, setImage] = useState<IImage>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setImage(images[randomIndex]);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mb-8">
      {loading ? (
        <Skeleton className="h-[270px] w-full rounded-md" />
      ) : (
        <>
          <div className="h-[280px] max-h-[280px] w-full border-2 bg-white">
            <Image
              src={image.src}
              width={290}
              height={270}
              alt={image.alt as string}
              className="h-full w-full items-center rounded-md object-contain text-center"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="text-center">📷 {image.alt}</div>
        </>
      )}
    </div>
  );
}

export default ImageContainer;
