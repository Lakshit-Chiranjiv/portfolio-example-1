import React from 'react'

const SocialLink = ({socialIcon,socialLinkName}) => {
  return (
    <div className='bg-green-400 w-24 p-4 m-3 inline-block rounded-md cursor-pointer transition hover:w-48 duration-300'>
        <p className="text-lg text-black">{socialIcon}</p>
        {/* <p className="text-lg text-black">{socialIcon}&nbsp;{socialLinkName}</p> */}
        
    </div>
  )
}

export default SocialLink