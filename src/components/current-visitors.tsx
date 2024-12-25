"use client";
import { useEffect, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(true);

  const ipData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://ipapi.co/json");
      const data = (await res.json()) as IpData;
      setData(data);
    } catch (error) {
      console.error("Failed to fetch IP data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    ipData();
  }, []);

  const ipDetails = [
    { label: "Time zone", value: data?.timezone },
    { label: "City", value: data?.city },
    { label: "Country", value: data?.country_name },
    { label: "ISP", value: data?.org },
  ];

  return (
    <div
      className="flex items-center justify-center gap-2"
      aria-label="Current visitors"
    >
      <Dialog>
        <DialogTrigger className="flex flex-row items-center justify-center gap-1 hover:opacity-80 transition-opacity">
          <span className="relative flex items-center h-3 w-3">
            <span className="absolute inline-flex items-center h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
          </span>
          Your info
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
          <DialogTitle className="mb-2">Your IP Information</DialogTitle>
            <DialogDescription>
              Don't worry, I'm not storing it. Just showing it to you.
            </DialogDescription>
          </DialogHeader>

          {isLoading ? (
            <div className="flex items-center justify-center p-4">
              <div className="w-6 h-6 border-2 border-gray-200 border-t-gray-600 rounded-full animate-spin" />
            </div>
          ) : (
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg w-full">
              <div className="grid grid-cols-2 w-full">
                {ipDetails.map(({ label, value }) => (
                  <div className="contents" key={label}>
                    <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800 text-sm font-medium">
                      <span>{label}</span>
                    </div>
                    <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800 text-sm">
                      <span className="font-medium truncate">
                        {value || "Not available"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CurrentVisitors;
