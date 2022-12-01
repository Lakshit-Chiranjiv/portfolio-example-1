import React from 'react'
import Land1 from './../assets/land1.png';
import Land2 from './../assets/land2.png';
import Land3 from './../assets/land3.png';
import Api1 from './../assets/api1.png';
import Api2 from './../assets/api2.png';
import {FiExternalLink} from 'react-icons/fi';
import {FaLaptopCode} from 'react-icons/fa';

let fImgIndex = 0;
let bImgIndex = 0;
let fsImgIndex = 0;
let fImages = [Land1,Land2,Land3];
let bImages = [Api1,Api2];
let fsImages = [Land1,Land2,Land3,Api1,Api2];

const ProjectCard = ({projectName,projectType,projectTechs,projectDeployLink,projectRepoLink}) => {

  let projectImg;

  if(projectType === 'f'){
    projectImg = fImages[fImgIndex%fImages.length];
    fImgIndex++;
  }
  if(projectType === 'b'){
    projectImg = bImages[bImgIndex%bImages.length];
    bImgIndex++;
  }
  if(projectType === 'fs'){
    projectImg = fsImages[fsImgIndex%fsImages.length];
    fsImgIndex++;
  }

  return (
    <div className='w-1/3 rounded-lg bg-slate-700 text-white flex flex-col gap-4 justify-center items-center shadow-lg shadow-gray-500 hover:scale-105 transition duration-300 p-20'>
        <img src={projectImg} alt="landpage" className='max-h-32 max-w-full h-auto w-auto'/>
        <p>{projectName}</p>
        <div className='flex flex-col xl:flex-row gap-12 items-center text-black'>
            <a href={projectDeployLink} className='bg-blue-300 p-2 px-14 rounded hover:bg-blue-200 transition duration-200'><FiExternalLink/></a>
            <a href={projectRepoLink} className='bg-yellow-300 p-2 px-14 rounded hover:bg-yellow-200 transition duration-200'><FaLaptopCode/></a>
        </div>
    </div>  

  )
}

export default ProjectCard

        {/* <div className="h-12 w-full rounded-lg bg-orange-300">
            <span>React JS |</span>
            <span>Node JS |</span>
            <span>Tailwind</span>
        </div> */}