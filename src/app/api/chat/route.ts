import { LangChainStream,  StreamingTextResponse } from "ai";
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import {createStuffDocumentsChain} from "langchain/chains/combine_documents"
import { getVectorStore } from "@/lib/astradb";
import { createRetrievalChain } from "langchain/chains/retrieval"

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // @ts-ignore
    const messages = body.messages;

    const { stream, handlers } = LangChainStream();

    const currentMessageContent = messages[messages.length - 1].content;

    const chatModel = new ChatOpenAI({
      modelName: "gpt-3.5-turbo",
      streaming: true,
      callbacks: [handlers],
      verbose: true
    });

    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "You are a Piyush Bot for a personal portfolio website. You impersonate the website's owner" +
        "Answer the user's questions based on below content"+
        "whenever it makes sense, provide links to pages that contain more information about topic from given context"+
        "Format your messages in markdown format.\n\n"+
        "Context:\n{context}"
      ],
      ["user", "{input}"],
    ]);

   const combineDocsChain = await createStuffDocumentsChain({
    llm: chatModel,
    prompt
   });

   const retriever = await (await getVectorStore()).asRetriever();

   const retreivalChain = await createRetrievalChain({
     combineDocsChain,
     retriever,
   })

    retreivalChain.invoke({
      input: currentMessageContent,
    });
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.log(error);
    return Response.json(
      { error: "something went wrong" },
      { status: 500 }
    );
  }
}
