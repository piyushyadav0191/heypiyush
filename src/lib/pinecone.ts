
import { PineconeStore } from "@langchain/pinecone";
import { Pinecone } from "@pinecone-database/pinecone";
import { env } from "@/env";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";


// Initialize Pinecone client
export const pinecone = new Pinecone({
  apiKey:
    env.PINECONE_API_KEY,
});

export async function getVectorStore() {
  const pineconeIndex = pinecone.Index(env.PINECONE_INDEX_NAME);

  return await PineconeStore.fromExistingIndex(
    new GoogleGenerativeAIEmbeddings({
      modelName: "text-embedding-004",
    }),
    { pineconeIndex }
  );
}
