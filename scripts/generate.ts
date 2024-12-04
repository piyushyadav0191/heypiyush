import dotenv from "dotenv";
dotenv.config();

import { DocumentInterface } from "@langchain/core/documents";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { Redis } from "@upstash/redis";
import { getVectorStore } from "@/lib/pinecone";

async function generateEmbedding() {
  await Redis.fromEnv().flushdb();
  const vectorStore = await getVectorStore();

  const loader = new TextLoader("src/texts/info.txt");

  const doc = await loader.load();

  const processedDoc: DocumentInterface = {
    pageContent: doc[0].pageContent.replace(/^\s*[\r]/gm, "").trim(),
    metadata: { url: doc[0].metadata.source },
  };

  // Create text splitter specifically for text content
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  const splitDocs = await splitter.splitDocuments([processedDoc]);
  // console.log(splitDocs);
  await vectorStore.addDocuments(splitDocs);

  console.log("completed");
}

generateEmbedding();
