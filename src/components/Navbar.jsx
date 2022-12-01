import React from 'react'

const Navbar = ({introRef,aboutRef,skillsRef,projectsRef,contactRef}) => {
  return (
    <div className='w-11/12 m-10 mx-auto text-white bg-green-400 rounded-md p-6'>
        <div className="flex justify-center items-center gap-12">
            <div  className='hover:text-black hover:bg-white rounded p-4 py-6 cursor-pointer'>
                <a className='text-xl font-bold' onClick={() => introRef.current.scrollIntoView({behavior:"smooth"})}>Home</a>
                {/* <div className="h-2 w-2 bg-white m-3 rounded-full group-hover:animate-bounce"></div> */}
            </div>
            <div className='hover:text-black hover:bg-white rounded p-4 py-6 cursor-pointer'>
                <a className='text-xl font-bold' onClick={() => aboutRef.current.scrollIntoView({behavior:"smooth"})}>About</a>
                {/* <div className="h-2 w-2 bg-white m-3 rounded-full group-hover:animate-bounce"></div> */}
            </div>
            <div className='hover:text-black hover:bg-white rounded p-4 py-6 cursor-pointer'>
                <a className='text-xl font-bold' onClick={() => skillsRef.current.scrollIntoView({behavior:"smooth"})}>Skills</a>
                {/* <div className="h-2 w-2 bg-white m-3 rounded-full group-hover:animate-bounce"></div> */}
            </div>
            <div className='hover:text-black hover:bg-white rounded p-4 py-6 cursor-pointer'>
                <a className='text-xl font-bold' onClick={() => projectsRef.current.scrollIntoView({behavior:"smooth"})}>Projects</a>
                {/* <div className="h-2 w-2 bg-white m-3 rounded-full group-hover:animate-bounce"></div> */}
            </div>
            <div className='hover:text-black hover:bg-white rounded p-4 py-6 cursor-pointer'>
                <a className='text-xl font-bold' onClick={() => contactRef.current.scrollIntoView({behavior:"smooth"})}>Contacts</a>
                {/* <div className="h-2 w-2 bg-white m-3 rounded-full group-hover:animate-bounce"></div> */}
            </div>
        </div>
    </div>
  )
}

export default Navbar