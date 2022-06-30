import axios from 'axios'
import { ProjectArticle } from 'components'
import isEqual from 'fast-deep-equal'
import React from 'react'
import project from 'styles/project.module.scss'
import useSWR from 'swr'

const Project: React.FC = () => {
  const { data } = useSWR<Array<ProjectTypes>>('/api/project', async () => {
    return await axios
      .request({
        method: 'GET',
        url: '/api/project',
      })
      .then((res) => {
        return res.data
      })
  })

  return (
    <>
      <section className={project.project} id="project">
        {data &&
          data.map((list, index) => {
            return <ProjectArticle data={list} key={index} />
          })}
      </section>
    </>
  )
}

export default React.memo(Project, isEqual)
