import axios from 'axios'
import isEqual from 'fast-deep-equal'
import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import project from 'styles/project.module.scss'
import useSWR from 'swr'

interface ProjectTypes {
  index: number
  name: string
  date: string
  skills: Array<string>
  git: string
  mainDescription: string
  detail: Array<string>
  thumbnail: string
}

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
    <section className={project.project}>
      <h1>Project</h1>
      <div className={project.project__list}>
        {data &&
          data.map((list, index: number) => {
            return (
              <div className={project['project__list-item']} key={index}>
                <div className={project['project__list-item--text']}>
                  <h2>{list.name}</h2>
                  <p>{list.mainDescription}</p>
                </div>
                <div className={project['project__list-item--image']}>
                  <picture>
                    <figure>
                      <Image
                        src={list.thumbnail}
                        layout="fill"
                        priority
                        alt="프로젝트썸네일 이미지"
                      ></Image>
                    </figure>
                  </picture>
                </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default React.memo(Project, isEqual)
