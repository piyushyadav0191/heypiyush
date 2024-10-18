import { AllSkills } from "@/content/AllSkills";
import React from "react";
import Badge from "./ui/Badge";
import { SkillsTree } from "./skills-tree";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { List, Grid } from "lucide-react";

export default function Skills() {
  return (
    <div className="my-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold my-4">Skills</h2>
        <Tabs defaultValue="list" className="w-full">
          <TabsList>
            <TabsTrigger value="list">
              <List className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="compact">
              <Grid className="h-4 w-4" />
            </TabsTrigger>
          </TabsList>

          <TabsContent value="list" className="mt-0">
            {AllSkills.map((skill) => (
              <div className="mr-2 mt-2 inline-block" key={skill.id}>
                <Badge
                  title={skill.title}
                  id={skill.id}
                  color={skill.color}
                  borderColor={skill.borderColor}
                />
              </div>
            ))}
          </TabsContent>
          <TabsContent value="compact" className="mt-0">
            <SkillsTree />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
