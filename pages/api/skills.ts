import { NextApiRequest, NextApiResponse } from 'next'

const skillList: Array<SkillsProps> = [
  { name: 'html', path: 'html', capacity: 90, grade: 3 },
  { name: 'css', path: 'css', capacity: 90, grade: 3 },
  { name: 'javascript', path: 'javascript', capacity: 80, grade: 3 },
  { name: 'typescript', path: 'typescript', capacity: 80, grade: 3 },
  { name: 'node', path: 'node', capacity: 80, grade: 3 },
  { name: 'react', path: 'react', capacity: 80, grade: 3 },
  { name: 'vue', path: 'vue', capacity: 70, grade: 2 },
  { name: 'redux', path: 'redux', capacity: 70, grade: 2 },
  { name: 'prisma', path: 'prisma', capacity: 60, grade: 2 },
  { name: 'mysql', path: 'mysql', capacity: 60, grade: 2 },
  { name: 'nextjs', path: 'nextjs', capacity: 60, grade: 2 },
  { name: 'mobx', path: 'mobx', capacity: 50, grade: 1 },
  { name: 'graphql', path: 'graphql', capacity: 50, grade: 1 },
  { name: 'storybook', path: 'storybook', capacity: 50, grade: 1 },
  { name: 'docker', path: 'docker', capacity: 50, grade: 1 },
]

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<Array<SkillsProps>>
) {
  res.send(skillList)
  res.end()
}
