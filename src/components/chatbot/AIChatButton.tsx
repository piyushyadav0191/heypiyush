"use client"

import { useState } from "react"
import {Bot} from "lucide-react"
import AiChatBox from "./AiChatBox"

type Props = {}

const AIChatButton = (props: Props) => {
    const [chatboxOpen, setChatBoxOpen] = useState(false)
  return (
    <>
    <button onClick={() => setChatBoxOpen(true)}>
        <Bot size={24} />
    </button>
    <AiChatBox open={chatboxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  )
}

export default AIChatButton