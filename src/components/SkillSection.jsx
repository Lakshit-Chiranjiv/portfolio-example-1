import React from 'react'
import SkillCard from './SkillCard'

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import langicons from '../LangIcons';

const SkillSection = () => {

   let pages = [1,2];

  return (
    <div className='bg-bgclr w-11/12 m-10 mx-auto rounded-md p-8 pt-4 bg-emerald-200'>
      <h1 className="font-bold text-4xl my-6 mb-10 text-center">My Skills</h1>
      <Swiper 
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}>

          {
            pages.map((page) => {
              return (
              <SwiperSlide className='flex flex-wrap justify-center items-center gap-6 swiper-slide my-10'>
                {
                  langicons.map((lang) => {
                    if(lang.page == page)
                      return <SkillCard skillIcon={lang.icon} skillName={lang.name} iconColor={lang.color}/>
                  })
                }
              </SwiperSlide>
              )
            })
          }
      </Swiper>

    </div>
  )
}

export default SkillSection






{/* <div className='flex flex-wrap justify-center items-center gap-6'>
<SkillCard skillIcon={LangIcons.js.icon} skillName={LangIcons.js.name} iconColor={LangIcons.js.color}/>
<SkillCard skillIcon={LangIcons.html.icon} skillName={LangIcons.html.name} iconColor={LangIcons.html.color}/>
<SkillCard skillIcon={LangIcons.css.icon} skillName={LangIcons.css.name} iconColor={LangIcons.css.color}/>
<SkillCard skillIcon={LangIcons.bootstrap.icon} skillName={LangIcons.bootstrap.name} iconColor={LangIcons.bootstrap.color}/>

<SkillCard skillIcon={LangIcons.c.icon} skillName={LangIcons.c.name} iconColor={LangIcons.c.color}/>
<SkillCard skillIcon={LangIcons.cpp.icon} skillName={LangIcons.cpp.name} iconColor={LangIcons.cpp.color}/>
<SkillCard skillIcon={LangIcons.java.icon} skillName={LangIcons.java.name} iconColor={LangIcons.java.color}/>
<SkillCard skillIcon={LangIcons.python.icon} skillName={LangIcons.python.name} iconColor={LangIcons.python.color}/>
</div> */}


{/* <SwiperSlide className='flex flex-wrap justify-center items-center gap-6 swiper-slide'>
  {
    langicons.map((lang) => {
      if(lang.page == 1)
        return <SkillCard skillIcon={lang.icon} skillName={lang.name} iconColor={lang.color}/>
    })
  }
</SwiperSlide>

<SwiperSlide className='flex flex-wrap justify-center items-center gap-6 swiper-slide'>
  {
    langicons.map((lang) => {
      if(lang.page == 2)
        return <SkillCard skillIcon={lang.icon} skillName={lang.name} iconColor={lang.color}/>
    })
  }
</SwiperSlide> */}