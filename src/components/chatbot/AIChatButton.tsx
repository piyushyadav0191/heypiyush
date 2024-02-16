"use client"

import { useState } from "react"
import {Bot} from "lucide-react"
import AiChatBox from "./AiChatBox"

type Props = {}

const AIChatButton = (props: Props) => {
    const [chatboxOpen, setChatBoxOpen] = useState(false)
  return (
    <div className="fixed bottom-0 right-0 mb-8 mr-8">

    <button onClick={() => setChatBoxOpen(true)}>
        <Bot size={45} />
    </button>
    <AiChatBox open={chatboxOpen} onClose={() => setChatBoxOpen(false)} />
    </div>
  )
}

export default AIChatButton