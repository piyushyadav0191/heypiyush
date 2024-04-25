import { AllSkills } from '@/content/AllSkills'
import React from 'react'
import Badge from './ui/Badge'

const Skills = () => {
  return (
     <div className='my-16 '>
      <h2 className='mb-8 text-3xl font-bold'>Skills</h2>
     {AllSkills.map((skill) => (
      <div className='mr-2 mt-2 inline-block' key={skill.id}>
      <Badge title={skill.title} id={skill.id} color={skill.color} borderColor={skill.borderColor}  />
      </div>
     ))}
    </div>
  )
}

export default Skills
