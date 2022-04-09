import React from 'react'

const SocialLink = ({socialIcon,socialLinkName,show,setShow,soloStyles,linkTo}) => {
  return (
    <a href={linkTo} target='_blank'>
      <div className={`w-16 p-4 m-3 rounded-md cursor-pointer transition-width hover:w-40 duration-300 flex gap-4 ${soloStyles} shadow-lg`} 
      onMouseEnter={()=>{
        setTimeout(()=>setShow(true),50);
      }} 
      onMouseLeave={()=>{
        setTimeout(()=>setShow(false),50);
      }}>
          <p className="">{socialIcon}</p>
          <p className={`text-lg ${(!show && `hidden`)} font-bold`}>{socialLinkName}</p>
      </div>
    </a>
  )
}

export default SocialLink