import axios from 'axios'
import { ProjectList } from 'components'
import isEqual from 'fast-deep-equal'
import React from 'react'
import project from 'styles/project.module.scss'
import useSWR from 'swr'
import ProjectDetail from './ProjectDetail'

const Project: React.FC = () => {
  const [isShow, setIsShow] = React.useState<boolean>(false)
  const [detailIndex, setDetailIndex] = React.useState<number>(0)

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
    setDetailIndex(index - 1)
    setIsShow(true)
  }, [])

  const handleClickClose = React.useCallback(() => {
    setIsShow(false)
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
      {data && isShow && (
        <ProjectDetail
          data={data[detailIndex].detail}
          thumbnail={data[detailIndex].thumbnail}
          onClick={handleClickClose}
        />
      )}
    </section>
  )
}

export default React.memo(Project, isEqual)
