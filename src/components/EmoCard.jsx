import React,{useEffect,useRef} from 'react';
import EmojiPic from './../assets/arem2.png';
import Typed from 'typed.js';

const EmoCard = () => {

  const el = useRef(null);
	const typed = useRef(null);

  useEffect(() => {
    const options = {
    	strings: ["Full Stack Web Developer","UI/UX Designer","Blockchain Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false
    };
    
    typed.current = new Typed(el.current, options);
    
    return () => {

      typed.current.destroy();
    }
  }, [])

  return (
    <div className='p-8 flex flex-col justify-center items-center bg-white rounded-md shadow-md w-1/3 min-w-[16rem]'>
        <img src={EmojiPic} alt="emojiPic" className='w-24'/>
        <h1 className="text-2xl font-bold mt-2 text-center">Lakshit Chiranjiv Sagar</h1>
        <div className="shadow-lg rounded p-4 text-center mt-4 bg-slate-100 w-64 h-14">
            <h4 className="font-medium" ref={el}></h4>
        </div>
    </div>
  )
}

export default EmoCard