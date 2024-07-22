import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to web design. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Web Design & Developement' ?
            <ToggleButton active value="'Web Design & Developement" onClick={() => setToggle('web app')}>Web Design & Developement</ToggleButton>
            :
            <ToggleButton value="'Web Design & Developement" onClick={() => setToggle('web app')}>Web Design & Developement</ToggleButton>
          }
          <Divider />
          {toggle === 'UI/UX Design' ?
            <ToggleButton active value="UI/UX Design" onClick={() => setToggle('android app')}>UI/UX Design</ToggleButton>
            :
            <ToggleButton value="UI/UX Design" onClick={() => setToggle('android app')}>UI/UX Design</ToggleButton>
          }
      
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects