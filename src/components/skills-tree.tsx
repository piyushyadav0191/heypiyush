import React from "react";
import { File, Folder, Tree } from "@/components/ui/file-tree";

export function SkillsTree() {
  return (
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Tree
        className="p-2 overflow-auto rounded-md bg-background"
        initialSelectedId="1"
        initialExpandedItems={[
          // "1",
          "2",
          // "3",
          // "4",
          // "5",
          // "6",
          // "7",
          // "8",
          // "9",
          // "10",
        ]}
        elements={ELEMENTS}
      >
        <Folder element="Skills" value="1">
          <Folder value="2" element="Programming Languages">
            <File value="21">
              <p>JavaScript/TypeScript</p>
            </File>
            <File value="22">
              <p>Python</p>
            </File>
            <File value="23">
              <p>Golang</p>
            </File>
            <File value="24">
              <p>SQL</p>
            </File>
          </Folder>
          <Folder value="3" element="Web Development Technologies">
            <File value="31">
              <p>HTML</p>
            </File>
            <File value="32">
              <p>CSS</p>
            </File>
            <File value="33">
              <p>React/Next.js</p>
            </File>
            <File value="34">
              <p>Node.js</p>
            </File>
          </Folder>
          <Folder value="4" element="Backend Technologies">
            <File value="41">
              <p>GraphQL</p>
            </File>
            <File value="42">
              <p>Node.js</p>
            </File>
            <File value="43">
              <p>Express</p>
            </File>
            <File value="44">
              <p>FastAPI</p>
            </File>
            <File value="45">
              <p>tRPC</p>
            </File>
            <File value="46">
              <p>NestJS (Basic)</p>
            </File>
          </Folder>
          <Folder value="5" element="Full Stack Technologies">
            <File value="51">
              <p>MERN Stack</p>
            </File>
            <File value="52">
              <p>Next.js + Prisma + PostgreSQL</p>
            </File>
            <File value="53">
              <p>tRPC</p>
            </File>
            <File value="54">
              <p>MERN + GraphQL</p>
            </File>
          </Folder>
          <Folder value="6" element="App Development Technologies">
            <File value="61">
              <p>React Native</p>
            </File>
            <File value="62">
              <p>Firebase</p>
            </File>
            <File value="63">
              <p>Node.js</p>
            </File>
          </Folder>
          <Folder value="7" element="AI/ML">
            <File value="71">
              <p>Langchain</p>
            </File>
            <File value="72">
              <p>OpenAI</p>
            </File>
            <File value="73">
              <p>Jupyter Notebook</p>
            </File>
            <File value="74">
              <p>Datastax</p>
            </File>
          </Folder>
          <Folder value="8" element="Developer Tools">
            <File value="81">
              <p>Git</p>
            </File>
            <File value="82">
              <p>Docker</p>
            </File>
            <File value="83">
              <p>Azure</p>
            </File>
            <File value="84">
              <p>AWS</p>
            </File>
            <File value="85">
              <p>VS Code</p>
            </File>
            <File value="86">
              <p>GitHub Actions</p>
            </File>
            <File value="87">
              <p>Datastax</p>
            </File>
            <File value="88">
              <p>Upstash</p>
            </File>
          </Folder>
        </Folder>
      </Tree>
    </div>
  );
}

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "Skills",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "Programming Languages",
        children: [
          { id: "21", isSelectable: true, name: "JavaScript/TypeScript" },
          { id: "22", isSelectable: true, name: "Python" },
          { id: "23", isSelectable: true, name: "Golang (Basic)" },
          { id: "24", isSelectable: true, name: "SQL" },
        ],
      },
      {
        id: "3",
        isSelectable: true,
        name: "Web Development Technologies",
        children: [
          { id: "31", isSelectable: true, name: "HTML" },
          { id: "32", isSelectable: true, name: "CSS" },
          { id: "33", isSelectable: true, name: "React/Next.js" },
          { id: "34", isSelectable: true, name: "Node.js" },
        ],
      },
      {
        id: "4",
        isSelectable: true,
        name: "Backend Technologies",
        children: [
          { id: "41", isSelectable: true, name: "GraphQL" },
          { id: "42", isSelectable: true, name: "Node.js" },
          { id: "43", isSelectable: true, name: "Express" },
          { id: "44", isSelectable: true, name: "FastAPI" },
          { id: "45", isSelectable: true, name: "tRPC" },
          { id: "46", isSelectable: true, name: "NestJS (Basic)" },
        ],
      },
      {
        id: "5",
        isSelectable: true,
        name: "Full Stack Technologies",
        children: [
          { id: "51", isSelectable: true, name: "MERN Stack" },
          {
            id: "52",
            isSelectable: true,
            name: "Next.js + Prisma + PostgreSQL",
          },
          { id: "53", isSelectable: true, name: "tRPC" },
          { id: "54", isSelectable: true, name: "MERN + GraphQL" },
        ],
      },
      {
        id: "6",
        isSelectable: true,
        name: "App Development Technologies",
        children: [
          { id: "61", isSelectable: true, name: "React Native" },
          { id: "62", isSelectable: true, name: "Firebase" },
          { id: "63", isSelectable: true, name: "Node.js" },
        ],
      },
      {
        id: "7",
        isSelectable: true,
        name: "AI/ML",
        children: [
          { id: "71", isSelectable: true, name: "Langchain" },
          { id: "72", isSelectable: true, name: "OpenAI" },
          { id: "73", isSelectable: true, name: "Jupyter Notebook" },
          { id: "74", isSelectable: true, name: "Datastax" },
        ],
      },
      {
        id: "8",
        isSelectable: true,
        name: "Developer Tools",
        children: [
          { id: "81", isSelectable: true, name: "Git" },
          { id: "82", isSelectable: true, name: "Docker" },
          { id: "83", isSelectable: true, name: "Azure" },
          { id: "84", isSelectable: true, name: "AWS" },
          { id: "85", isSelectable: true, name: "VS Code" },
          { id: "86", isSelectable: true, name: "GitHub Actions" },
          { id: "87", isSelectable: true, name: "Datastax" },
          { id: "88", isSelectable: true, name: "Upstash" },
        ],
      },
    ],
  },
];
