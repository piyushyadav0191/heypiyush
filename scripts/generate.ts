import dotenv from "dotenv"
dotenv.config()

import { DocumentInterface } from "@langchain/core/documents"
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter"
import {DirectoryLoader} from "langchain/document_loaders/fs/directory"
import {TextLoader} from "langchain/document_loaders/fs/text"
import { getEmbeddingCollection, getVectorStore } from "../src/lib/astradb"

async function generateEmbedding(){

    const vectorStore = await getVectorStore();

    (await getEmbeddingCollection()).deleteMany({})

const loader = new DirectoryLoader("src", {
    ".tsx": (path) => new TextLoader(path),
    ".ts": (path) => new TextLoader(path),
    ".mdx": (path) => new TextLoader(path)
}, true)

const docs = await (await loader.load())
.filter(doc => doc.metadata.source.endsWith("page.tsx"))
.map((doc):DocumentInterface => {
    const url = doc.metadata.source
    .replace(/\\/g, "/")
    .split("/src/app")[1]
    .split("/page.")[0] || "/"

    const pageContentTrimmed = doc.pageContent
    .replace(/^import.*$/gm, "") // remove all import statement
    .replace(/ className=(["']).*?\1| className={.*?}/g, "") // remve cn
    .replace(/^\s*[\r]/gm, "") // rmeove empty lines
    .trim()

    return {
        pageContent:  pageContentTrimmed,
        metadata: {url}
    }
})

    const splitter = RecursiveCharacterTextSplitter.fromLanguage("html")

    const splitDocs = await splitter.splitDocuments(docs)
   await vectorStore.addDocuments(splitDocs)

}

generateEmbedding()