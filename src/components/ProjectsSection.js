import React from 'react'
import { Swiper } from 'swiper/react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle'
import projects from '../assets/data/projects';
import ProjectItem from './ProjectItem';

const projectSectionStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems{
    display:flex;
    gap: 3rem;
    margin-top: 5rem;
  }
`;

export default function ProjectsSection() {
  return (
    <ProjectsSectionStyle>
      <div className='container'>
        <SectionTitle heading='Projects' subheading='some of my recent works'/>
        <div className='projects__allItems'>
          <Swiper>
          {projects.map((projects, index) => {
            if(index >= 5) return;
            return <ProjectItem/>;
          })}
          </Swiper>
        </div>
      </div>
    </ProjectsSectionStyle>
  )
}
