import dotenv from "dotenv";
dotenv.config();

import { AstraDBVectorStore } from "@langchain/community/vectorstores/astradb";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { DataAPIClient } from "@datastax/astra-db-ts";

const endpoint = process.env.ASTRA_DB_ENDPOINT || "";
const token = process.env.ASTRA_DB_APPLICATION_TOKEN || "";
const collection = process.env.ASTRA_DB_COLLECTION || "";

if (!endpoint || !token || !collection) {
  throw new Error("please provide endpint token collection of astra");
}

const client = new DataAPIClient(token);
const Astra = client.db(endpoint);

export async function getVectorStore() {
  return AstraDBVectorStore.fromExistingIndex(
    new GoogleGenerativeAIEmbeddings({
      modelName: "text-embedding-004",
    }),
    {
      token,
      endpoint,
      collection,
      collectionOptions: {
        vector: {
          dimension: 768,
          metric: "cosine",
        },
      },
    }
  );
}

export async function getEmbeddingCollection() {
  return Astra.collection(collection);
}
