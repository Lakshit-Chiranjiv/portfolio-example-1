import React from 'react'

const SkillCard = ({skillIcon,skillName,iconColor}) => {
  return (
    <div className='h-32 w-1/5 rounded-lg bg-gray-700 text-white flex flex-col gap-4 justify-center items-center shadow-lg shadow-gray-500 hover:scale-110 transition duration-300'>
        <span className={`${iconColor} text-4xl`}>{skillIcon}</span>
        <p>{skillName.toUpperCase()}</p>
    </div>
  )
}

export default SkillCard