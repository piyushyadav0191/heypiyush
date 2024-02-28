"use client";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import { Skeleton } from "@/components/ui";
import cn from "@/utils/cn";
import Image from "./mdx/image";

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  for (const card of document.querySelectorAll('[data-id="post-card"]')) {
    const target = card as HTMLDivElement;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }
};

const PostCards = (props: any) => {
  const { posts } = props;

  return (
    <div
      className="group grid gap-4 "
      data-testid="post-cards"
      onMouseMove={handleMouseMove}
    >
      {posts.map((post: any) => (
        <PostCard key={post._id} {...post} />
      ))}
    </div>
  );
};

const PostCard = (props: any) => {
  const { _id, link, title, summary, imageSrc, date } = props;
  const [formattedDate, setFormattedDate] = React.useState("");
  React.useEffect(() => {
    setFormattedDate(dayjs(props.date).format("MMMM DD, YYYY"));
  }, [date]);

  return (
    <div
      key={_id}
      className={cn(
        "relative flex flex-row space-y-3 rounded-2xl border p-6 group-hover:after:opacity-100",
        "hover:before:opacity-100",
        "before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:bg-[radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),_rgba(0,_0,_0,_0.06),transparent_40%)] before:opacity-0 before:transition-opacity before:duration-500 dark:before:bg-[radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),_rgba(255,_255,_255,_0.06),transparent_40%)]",
        "after:absolute after:inset-0 after:-z-30 after:rounded-[inherit] after:bg-[radial-gradient(600px_circle_at_var(--mouse-x)_var(--mouse-y),_rgba(0,0,0,_0.4),transparent_40%)] after:opacity-0 after:transition-opacity after:duration-500 dark:after:bg-[radial-gradient(600px_circle_at_var(--mouse-x)_var(--mouse-y),_rgba(255,_255,_255,_0.4),transparent_40%)]"
      )}
      data-id="post-card"
    >
      <div className="absolute inset-px -z-20 rounded-[inherit] bg-background w-full" />
      <Link href={link} target="_blank">
        <div className="w-full space-y-4">
          <h2 className="text-xl w-full font-bold">{title}</h2>
          <div className="text-muted-foreground">{summary}</div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          {formattedDate || <Skeleton className="h-5 w-10" />}
          <div>&middot;</div>
        </div>
      </Link>
    </div>
  );
};

export default PostCards;
