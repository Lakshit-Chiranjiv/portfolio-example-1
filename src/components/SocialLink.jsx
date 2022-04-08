import React from 'react'

const SocialLink = ({socialIcon,socialLinkName,show,setShow}) => {
  return (
    <div className='bg-green-400 w-16 p-4 m-3 rounded-md cursor-pointer transition-width hover:w-40 duration-300 flex gap-4' onMouseEnter={()=>{setShow(true)}} onMouseLeave={()=>{setShow(false)}}>
        <p className="text-lg text-black">{socialIcon}</p>
        <p className={`text-lg text-black transition-display duration-600 ${(!show && `hidden`)} font-bold`}>{socialLinkName}</p>
    </div>
  )
}

export default SocialLink