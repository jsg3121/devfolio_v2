import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'

const ProjectContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-color: antiquewhite;
`

const Project: React.FC = () => {
  return <ProjectContainer>asdf</ProjectContainer>
}

export default React.memo(Project, isEqual)
