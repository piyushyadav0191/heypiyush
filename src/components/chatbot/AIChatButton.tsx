"use client";

import { Bot } from "lucide-react";
import AiChatBox from "./AiChatBox";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

type Props = {};

const AIChatButton = (props: Props) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="fixed bottom-0 right-0 mb-8 mr-8">
          <Bot size={45} />
        </SheetTrigger>
        <SheetContent className=" md:w-[600px] rounded border bg-background shadow-xl">
          <AiChatBox />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AIChatButton;
