import React from 'react';
import EmojiPic from './../assets/arem2.png';

const EmoCard = () => {
  return (
    <div className='p-8 flex flex-col justify-center items-center bg-white rounded-md shadow-md w-1/3 min-w-[16rem]'>
        <img src={EmojiPic} alt="emojiPic" className='w-24'/>
        <h1 className="text-2xl font-bold mt-2 text-center">Lakshit Chiranjiv Sagar</h1>
        <div className="shadow-lg rounded p-4 text-center mt-4 bg-slate-100">
            <h4 className="font-medium">
                Full Stack Developer | Designer
            </h4>
        </div>
    </div>
  )
}

export default EmoCard