import React from 'react'

const Navbar = () => {
  return (
    <div className='w-11/12 m-10 mx-auto text-white bg-green-400 rounded-md p-6'>
        <div className="flex justify-center items-center gap-12">
            <div  className='hover:text-black hover:bg-white rounded p-4 py-6 cursor-pointer'>
                <a href="#intro" className='text-xl font-bold'>Home</a>
                {/* <div className="h-2 w-2 bg-white m-3 rounded-full group-hover:animate-bounce"></div> */}
            </div>
            <div className='hover:text-black hover:bg-white rounded p-4 py-6 cursor-pointer'>
                <a href="#about" className='text-xl font-bold'>About</a>
                {/* <div className="h-2 w-2 bg-white m-3 rounded-full group-hover:animate-bounce"></div> */}
            </div>
            <div className='hover:text-black hover:bg-white rounded p-4 py-6 cursor-pointer'>
                <a href="#skills" className='text-xl font-bold'>Skills</a>
                {/* <div className="h-2 w-2 bg-white m-3 rounded-full group-hover:animate-bounce"></div> */}
            </div>
            <div className='hover:text-black hover:bg-white rounded p-4 py-6 cursor-pointer'>
                <a href="#projects" className='text-xl font-bold'>Projects</a>
                {/* <div className="h-2 w-2 bg-white m-3 rounded-full group-hover:animate-bounce"></div> */}
            </div>
            <div className='hover:text-black hover:bg-white rounded p-4 py-6 cursor-pointer'>
                <a href="#contact" className='text-xl font-bold'>Contacts</a>
                {/* <div className="h-2 w-2 bg-white m-3 rounded-full group-hover:animate-bounce"></div> */}
            </div>
        </div>
    </div>
  )
}

export default Navbar