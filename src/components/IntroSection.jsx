import React,{useState} from 'react';
import EmoCard from './EmoCard';
import {FaGithub,FaLinkedin,FaTwitter} from "react-icons/fa";
import SocialLink from './SocialLink';

const IntroSection = () => {

  const [showGithub, setShowGithub] = useState(false);
  const [showLinkedin, setShowLinkedin] = useState(false);
  const [showTwitter, setShowTwitter] = useState(false);

  return (
    <>
      <div className='bg-bgclr w-11/12 m-10 mx-auto rounded-md p-8 sm:bg-red-500 md:bg-blue-500 lg:bg-green-400 xl:bg-yellow-300 flex flex-col gap-4 justify-center items-center'>
          <EmoCard/>
          <div className='flex gap-4'>
            <SocialLink socialIcon={<FaGithub size={28}/>} socialLinkName='Github' show={showGithub} setShow={setShowGithub} soloStyles="bg-white" linkTo="https://github.com/Lakshit-Chiranjiv"/>
            <SocialLink socialIcon={<FaLinkedin size={28}/>} socialLinkName='LinkedIn' show={showLinkedin} setShow={setShowLinkedin} soloStyles="bg-blue-600 text-white" linkTo="https://www.linkedin.com/in/lakshit-chiranjiv-sagar-4b0b15198/"/>
            <SocialLink socialIcon={<FaTwitter size={28}/>} socialLinkName='Twitter' show={showTwitter} setShow={setShowTwitter} soloStyles="bg-sky-500 text-white" linkTo="https://twitter.com/lakshit_cs"/>
          </div>
      </div>



    </>
  )
}

export default IntroSection