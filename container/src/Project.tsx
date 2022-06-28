import axios from 'axios'
import { ProjectList } from 'components'
import isEqual from 'fast-deep-equal'
import React from 'react'
import project from 'styles/project.module.scss'
import useSWR from 'swr'
import ProjectDetail from './ProjectDetail'
import { gsap } from 'gsap'

const Project: React.FC = () => {
  const [isShow, setIsShow] = React.useState<boolean>(false)
  const [detailIndex, setDetailIndex] = React.useState<number>(0)
  const showRef = React.useRef<HTMLDivElement>(null)
  const titleRef = React.useRef<HTMLHeadingElement>(null)

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
    // document.querySelector('html')?.classList.add('project__detail--show')
    // setIsShow(true)
  }, [])

  const handleClickClose = React.useCallback(() => {
    document.querySelector('html')?.classList.remove('project__detail--show')
    setIsShow(false)
  }, [])

  React.useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#project',
          start: window.innerWidth * 2 + window.innerHeight / 2,
          end: '+=50%',
          scrub: 1,
        },
      })
      .to(showRef.current, {
        scale: 1,
      })
      .to(
        showRef.current,
        {
          position: 'relative',
        },
        0
      )

    // gsap.to(titleRef.current, {
    //   y: '100%',
    //   scrollTrigger: {
    //     trigger: showRef.current,
    //     markers: true,
    //     start: window.innerWidth * 2 + window.innerHeight,
    //     end: '+=100%',
    //     pin: true,
    //   },
    // })
  }, [])

  return (
    <>
      <section className={project.project} id="project">
        <div ref={showRef} className={project.project__intro}>
          <h1 ref={titleRef}>Porject</h1>
        </div>
      </section>
      <div className={project.project__list}>
        {data &&
          data.map((list, index: number) => {
            return <ProjectList data={list} key={index} onClick={handleClick} />
          })}
      </div>
      {/* {data && isShow && (
          <ProjectDetail
            data={data[detailIndex].detail}
            thumbnail={data[detailIndex].thumbnail}
            onClick={handleClickClose}
          />
        )} */}
    </>
  )
}

export default React.memo(Project, isEqual)
