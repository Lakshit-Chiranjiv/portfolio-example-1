import React,{useState} from 'react';
import EmoCard from './EmoCard';
import {FaGithub,FaLinkedin,FaTwitter} from "react-icons/fa";
import SocialLink from './SocialLink';

const IntroSection = () => {

  const [show, setShow] = useState(false);

  return (
    <>
      <div className='bg-bgclr w-11/12 m-10 mx-auto rounded-md p-8 sm:bg-red-500 md:bg-blue-500 lg:bg-green-400 xl:bg-yellow-300 flex flex-col gap-4 justify-center items-center'>
          <EmoCard/>
          <div className='flex gap-4'>
            <SocialLink socialIcon={<FaGithub size={28} className='inline-block'/>} socialLinkName='Github' show={show} setShow={setShow}/>
            {/* <SocialLink socialIcon={<FaLinkedin size={28} className='inline-block'/>} socialLinkName='Linked In' show={show} setShow={setShow}/>
            <SocialLink socialIcon={<FaTwitter size={28} className='inline-block'/>} socialLinkName='Twitter' show={show} setShow={setShow}/> */}
          </div>
      </div>



    </>
  )
}

export default IntroSection