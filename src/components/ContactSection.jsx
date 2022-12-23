import React from 'react'
import {MdEmail} from 'react-icons/md';
import {FaGithub,FaLinkedin,FaTwitter} from "react-icons/fa";

const ContactSection = ({contactRef}) => {
  return (
    <div ref={contactRef} id='contact' className='w-11/12 m-10 mx-auto rounded-md p-8 pt-4 bg-violet-300'>
        <div className="flex gap-12 text-2xl justify-center">
            <a href="#" className='hover:scale-125 transition duration-200'><FaGithub/></a>
            <a href="#" className='text-blue-600 hover:scale-125 transition duration-200'><FaLinkedin/></a>
            <a href="#" className='text-sky-500 hover:scale-125 transition duration-200'><FaTwitter/></a>
            <a href="#" className='text-red-400 hover:scale-125 transition duration-200'><MdEmail/></a>
        </div>

        <div className='text-center mt-6'>
            <p>-Created by Lakshit Chiranjiv Sagar using the Tailwind|React Jutsu 🍥✨</p>
            <p className="text-sm mt-4 text-slate-600">&copy; {new Date().getFullYear()} | Lakshit,India. | All rights reserved.</p>
        </div>
    </div>
  )
}

export default ContactSection