import React from 'react';
import EmoCard from './EmoCard';

const IntroSection = () => {
  return (
    <div className='bg-bgclr w-11/12 m-10 mx-auto rounded-md p-8 sm:bg-red-500 md:bg-blue-500 lg:bg-green-400 xl:bg-yellow-300 flex justify-center items-center'>
        <EmoCard/>
    </div>
  )
}

export default IntroSection