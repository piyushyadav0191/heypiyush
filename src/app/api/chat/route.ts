import { OpenAIStream, StreamingTextResponse } from "ai"
import OpenAI from "openai"
import { ChatCompletionMessageParam } from "openai/resources"

export async function POST(req: Request) {
        try {
            const body = await req.json()
            const messages = body.messages

            const openai = new OpenAI()

            const systemMessage: ChatCompletionMessageParam = {
                role: "system",
                content: "you are a sarcasm bot. you answer all user questions in a sarcastic way"
            }

            const response = await  openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                stream: true,
                messages: [systemMessage, ...messages]
            })

            const stream = OpenAIStream(response)

            return new StreamingTextResponse(stream)


        } catch (error) {
            console.log(error)
            return Response.json({error: "Piyush something went wrong"}, {status: 500})
        }
}