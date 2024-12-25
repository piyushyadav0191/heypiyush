"use client";

import { Bot } from "lucide-react";
import AiChatBox from "./AiChatBox";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type Props = {};

const AIChatButton = (props: Props) => {
  return (
    <Sheet>
      <SheetTrigger className="fixed bottom-0 right-0 mb-8 mr-8">
        <Bot size={45} />
      </SheetTrigger>
      <SheetContent className=" md:w-[600px] rounded border bg-background shadow-xl">
        <SheetHeader>
          <SheetTitle className="sr-only">Chat</SheetTitle>
          <SheetDescription className="sr-only">
            Chat with our AI assistant.
          </SheetDescription>
        </SheetHeader>
        <AiChatBox />
      </SheetContent>
    </Sheet>
  );
};

export default AIChatButton;
