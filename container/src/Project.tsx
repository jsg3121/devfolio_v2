import axios from 'axios'
import { ProjectList } from 'components'
import isEqual from 'fast-deep-equal'
import React from 'react'
import project from 'styles/project.module.scss'
import useSWR from 'swr'

const Project: React.FC = () => {
  const [isShow, setIsShow] = React.useState<boolean>(false)

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

  const handleClick = React.useCallback((index: number) => {
    console.log(index)
  }, [])

  return (
    <section className={project.project}>
      <h1>Project</h1>
      <div className={project.project__list}>
        {data &&
          data.map((list, index: number) => {
            return <ProjectList data={list} key={index} onClick={handleClick} />
          })}
      </div>
    </section>
  )
}

export default React.memo(Project, isEqual)
