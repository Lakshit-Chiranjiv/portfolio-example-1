import React from 'react';
import EmoCard from './EmoCard';
import {FaGithub,FaLinkedin,FaTwitter} from "react-icons/fa";
import SocialLink from './SocialLink';

const IntroSection = () => {
  return (
    <>
      <div className='bg-bgclr w-11/12 m-10 mx-auto rounded-md p-8 sm:bg-red-500 md:bg-blue-500 lg:bg-green-400 xl:bg-yellow-300 flex flex-col gap-4 justify-center items-center'>
          <EmoCard/>
          <div>
            <SocialLink socialIcon={<FaGithub size={28} className='inline-block'/>} socialLinkName='Github'/>
            <SocialLink socialIcon={<FaLinkedin size={28} className='inline-block'/>} socialLinkName='Linked In'/>
            <SocialLink socialIcon={<FaTwitter size={28} className='inline-block'/>} socialLinkName='Twitter'/>
          </div>
          <div className="bg-red-500 h-10 w-16 transition duration-300 hover:w-32 text-white">
            Hello div
          </div>
      </div>



    </>
  )
}

export default IntroSection