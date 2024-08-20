"use client";

import { type Session } from "next-auth";
import { signOut } from "next-auth/react";
import React from "react";
import { toast } from "sonner";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Skeleton,
  Textarea,
} from "@/components/ui";
import { useRouter } from "next/navigation";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowLeftIcon } from "lucide-react";
import { useRef, useState, useEffect, useId } from "react";

/**
 * The props of {@link Form}.
 */
type FormProps = {
  /**
   * The session of the user.
   */
  user: Session["user"];
};

const TRANSITION = {
  type: "spring",
  bounce: 0.05,
  duration: 0.3,
};

const Form = (props: FormProps) => {
  const router = useRouter();
  const { user } = props;
  const [message, setMessage] = React.useState("");
  const [isCreating, setIsCreating] = React.useState(false);
   const uniqueId = useId();
   const formContainerRef = useRef<HTMLDivElement>(null);
   const [isOpen, setIsOpen] = useState(false);

  const createMessageHandler = async () => {
    if (!message) return toast.error("Please enter a message");

    setIsCreating(true);
    const loading = toast.loading("Creating a message...");

    try {

      const response = await fetch("/api/guestbook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      if (!response.ok) throw new Error("Something went wrong");
    } catch (error) {
      setIsCreating(false);
      toast.dismiss(loading);
      toast.error((error as Error).message);
    }

    setIsCreating(false);
    toast.dismiss(loading);
    toast.success("Message created successfully");
    router.refresh();
    return setMessage("");
  };

   const openMenu = () => {
     setIsOpen(true);
   };

   const closeMenu = () => {
     setIsOpen(false);
      setMessage("");
   };


   useEffect(() => {
     const handleKeyDown = (event: KeyboardEvent) => {
       if (event.key === "Escape") {
         closeMenu();
       }
     };

     document.addEventListener("keydown", handleKeyDown);

     return () => {
       document.removeEventListener("keydown", handleKeyDown);
     };
   }, []);

  return (
    <>
      {/* <div className="mb-2 flex gap-3">
        <Avatar>
          <AvatarImage
            // @ts-ignore
            src={user.image as string}
            width={40}
            height={40}
            alt={user.name as string}
            className="h-10 w-10"
          />
          <AvatarFallback className="bg-transparent">
            <Skeleton className="h-10 w-10 rounded-full" />
          </AvatarFallback>
        </Avatar>
        <Textarea
          placeholder="Your message ..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={() => signOut()} type="button">
          Logout
        </Button>
        <Button
        type="button"
        onClick={createMessageHandler}
          disabled={isCreating}
        >
          Submit
        </Button>
      </div> */}
      <MotionConfig transition={TRANSITION}>
        <div className="relative flex items-center justify-center">
          <motion.button
            key="button"
            layoutId={`popover-${uniqueId}`}
            className="flex h-9 items-center border border-zinc-950/10 bg-white px-3 text-zinc-950 dark:border-zinc-50/10 dark:bg-zinc-700 dark:text-zinc-50"
            style={{
              borderRadius: 8,
            }}
            onClick={openMenu}
          >
            <motion.span
              layoutId={`popover-label-${uniqueId}`}
              className="text-sm"
            >
              Add Note
            </motion.span>
          </motion.button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                ref={formContainerRef}
                layoutId={`popover-${uniqueId}`}
                className="absolute h-[200px] w-[364px] overflow-hidden border border-zinc-950/10 bg-white outline-none dark:bg-zinc-700"
                style={{
                  borderRadius: 12,
                }}
              >
                <Avatar>
                  <AvatarImage
                    // @ts-ignore
                    src={user.image as string}
                    width={40}
                    height={40}
                    alt={user.name as string}
                    className="h-10 w-10"
                  />
                  <AvatarFallback className="bg-transparent">
                    <Skeleton className="h-10 w-10 rounded-full" />
                  </AvatarFallback>
                </Avatar>
                <form
                  className="flex h-full flex-col"
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log("Add Note");
                  }}
                >
                  <motion.span
                    layoutId={`popover-label-${uniqueId}`}
                    aria-hidden="true"
                    style={{
                      opacity: message ? 0 : 1,
                    }}
                    className="absolute left-4 top-3 select-none text-sm text-zinc-500 dark:text-zinc-400 ml-8"
                  >
                    You can write anything here
                  </motion.span>
                  <textarea
                    className="h-full  w-full resize-none rounded-md bg-transparent px-4 py-3 text-sm outline-none"
                    autoFocus
                    placeholder="Your message ..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <div key="close" className="px-4 py-5 flex justify-between mb-8">
                    <button
                      type="button"
                      className="flex items-center"
                      onClick={closeMenu}
                      aria-label="Close popover"
                    >
                      <ArrowLeftIcon
                        size={16}
                        className="text-zinc-900 dark:text-zinc-100"
                      />
                    </button>
                    <button
                      className="h-8 shrink-0 scale-100 select-none rounded-lg border border-zinc-950/10 px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:text-zinc-50 dark:hover:bg-zinc-800"
                      type="button"
                      aria-label="Submit"
                      disabled={isCreating}
                      onClick={() => {
                        createMessageHandler();
                        closeMenu();
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </MotionConfig>
    </>
  );
};

export default Form;
