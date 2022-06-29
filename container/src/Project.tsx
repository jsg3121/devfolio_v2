import axios from 'axios'
import { ProjectList } from 'components'
import isEqual from 'fast-deep-equal'
import { gsap } from 'gsap'
import React from 'react'
import project from 'styles/project.module.scss'
import useSWR from 'swr'

const Project: React.FC = () => {
  const showRef = React.useRef<HTMLElement>(null)
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

  React.useEffect(() => {
    const container = document.querySelector('.container')

    gsap.to(showRef.current, {
      scrollTrigger: {
        trigger: showRef.current,
        start: 'top top',
        end: '+=50%',
        scrub: true,
        pin: true,
        scroller: container,
      },
    })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          scrub: true,
          start: '-100%',
          end: '+=1000 center',
          scroller: container,
          markers: true,
        },
      })
      .to(titleRef.current, {
        y: '-100vh',
        opacity: 0,
      })
  }, [])

  return (
    <>
      <section ref={showRef} className={project.project} id="project">
        <h1 ref={titleRef}>Porject</h1>
      </section>
      <div className={project.project__list}>
        {data &&
          data.map((list, index: number) => {
            return <ProjectList data={list} key={index} />
          })}
      </div>
    </>
  )
}

export default React.memo(Project, isEqual)
