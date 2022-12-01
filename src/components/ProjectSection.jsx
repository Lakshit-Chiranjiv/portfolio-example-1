import React from 'react'

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProjectCard from './ProjectCard';
import projectData from '../ProjectsData';


const ProjectSection = () => {

  let pages = [1,2,3];
  return (
    <div id='projects' className='bg-bgclr w-11/12 m-10 mx-auto rounded-md p-8 pt-4 bg-pink-200'>
        <h1 className="font-bold text-4xl my-6 mb-10 text-center">My Projects</h1>

        <Swiper 
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}>
            {
              pages.map((page) => {
                return (<SwiperSlide key={page} className='flex flex-wrap justify-center items-center gap-8 swiper-slide my-10'>
                    {
                      projectData.map((project) => {
                        if(project.page === page){
                          return <ProjectCard key={project.name} projectName={project.name} projectType={project.type} projectTechs={project.techs} projectDeployLink={project.deploy} projectRepoLink={project.repo}/>
                        }
                      })
                    }
                </SwiperSlide>)
              })
            }

        </Swiper>
    </div>
  )
}

export default ProjectSection