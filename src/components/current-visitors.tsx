"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui";
import { IpData } from "@/types/ipdata";

const CurrentVisitors = () => {

  const [data, setData] = useState<IpData>();

  const ipData = async () => {
    try {
      const res = await fetch("https://ipapi.co/json");
      const data = (await res.json()) as IpData;
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  ipData();

  return (
    <div
      className="flex items-center justify-center gap-2"
      aria-label="Current visitors"
    >
      <Dialog>
        <DialogTrigger className="flex flex-row items-center justify-center gap-1">
          <>
            <span className="relative flex items-center h-3 w-3">
              <span className="absolute inline-flex items-center h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
            </span>
           Your info
          </>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Your IP Information</DialogTitle>
            <DialogDescription>
              Don't worry, I'm not storing it. Just showing it to you.
            </DialogDescription>
          </DialogHeader>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg w-full max-w-sm">
            <div className="grid grid-cols-2 w-full">
              <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800 text-sm font-medium grid gap-1.5 items-center">
                <span>Time zone</span>
              </div>
              <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800 text-sm flex items-center">
                <span className="font-medium truncate">{data?.timezone}</span>
              </div>
              <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800 text-sm font-medium grid gap-1.5 items-center">
                <span>City</span>
              </div>
              <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800 text-sm flex items-center">
                <span className="font-medium">{data?.city}</span>
              </div>
              <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800 text-sm font-medium grid gap-1.5 items-center">
                <span>Country</span>
              </div>
              <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800 text-sm flex items-center">
                <span className="font-medium">{data?.country_name}</span>
              </div>
              <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800 text-sm font-medium grid gap-1.5 items-center">
                <span>ISP</span>
              </div>
              <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800 text-sm flex items-center">
                <span className="font-medium">{data?.org}</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CurrentVisitors;
