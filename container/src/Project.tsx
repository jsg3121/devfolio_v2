import axios from 'axios'
import { ProjectDetail } from 'components'
import isEqual from 'fast-deep-equal'
import { gsap } from 'gsap'
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

  React.useEffect(() => {
    const container = document.querySelector('.container')
    const content = document.querySelector('.project__content')

    gsap.to(content, {
      scrollTrigger: {
        trigger: content,
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
          trigger: document.querySelector('#project .project__title h1'),
          scrub: true,
          start: '-100%',
          end: '+=20%',
          scroller: container,
        },
      })
      .to(document.querySelector('#project .project__title h1'), {
        y: '-50%',
        opacity: 0,
      })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: document.querySelector('#project .project__title h2'),
          scrub: true,
          start: '-100%',
          end: '+=20%',
          scroller: container,
        },
      })
      .to(document.querySelector('#project .project__title h2'), {
        y: '-50%',
        opacity: 0,
        delay: 0.6,
      })
  }, [])

  return (
    <>
      <section className={project.project} id="project">
        <article>
          <div className={`${project.project__content} project__content`}>
            <div className={`${project.project__title} project__title`}>
              <h1>Porject</h1>
              <h2>.01</h2>
            </div>
          </div>
          <div className={project.project__list}>
            {data && <ProjectDetail data={data[0]} />}
          </div>
        </article>
      </section>
    </>
  )
}

export default React.memo(Project, isEqual)
