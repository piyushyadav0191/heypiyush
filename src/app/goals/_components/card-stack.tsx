"use client";

import { CardStack } from "@/components/ui/card-stack"
import cn from "@/utils/cn";


export function CardStackDemo() {
  return (
    <div className="h-[25rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}


export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Piyush Yadav",
    designation: "",
    content: (
        <p>
        My priority-based goal will be to <Highlight>master the Golang language</Highlight> in my free time because Golang offers godlike simplicity and performance. As I delve into its depths, I'll be harnessing the power of coding greatness!
    </p>
    ),
  },
  {
    id: 1,
    name: "Piyush Yadav",
    designation: "",
    content: (
        <p>
        The only sport where I am confident is soccer, but I want to <Highlight>venture into the world of golf</Highlight> as well. After all, mastering both the pitch and the green adds a whole new dimension to my athletic prowess!
    </p>
    ),
  },
  {
    id: 2,
    name: "Piyush Yadav",
    designation: "",
    content: (
        <p>
        I don't embark on many trips, so I aim to <Highlight>plan an exciting adventure</Highlight> to truly <Highlight>rejuvenate my soul</Highlight>. Who said relaxation can't be an adrenaline-fueled adventure?
    </p>
    ),
  },
];
