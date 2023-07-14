import Link from "next/link";
import React from "react";
import {motion} from "framer-motion"
import logoFM from "../../public/images/logo.png"
import Image from "next/image";

const MotionLink = motion(Link)

const Logo = ({mode}) => {
  console.log("mode", mode);
  const linkClassName = mode === "dark"
  ? 'w-[100px] h-[100px] bg-dark text-light flex items-center justify-center rounded-full text-2xl fount-bold border border-solid border-light dark:border-transparent'
  : 'w-[100px] h-[100px] bg-light dark:bg-dark text-light flex items-center justify-center rounded-full text-2xl fount-bold border border-solid border-transparent dark:border-light';

  const hoverBackgroundColor = mode === "dark"
  ? ['#121212', 'rgba(131,58,180,1)', 'rgba(253,29,29,1)', 'rgba(252,176,69,1)', 'rgba(131,58,180,1)', '#121212']
  : ['#fbfbfb', 'rgba(131,58,180,1)', 'rgba(253,29,29,1)', 'rgba(252,176,69,1)', 'rgba(131,58,180,1)', '#fbfbfb'];

  return(
    <div className='flex items-center justify-center mt-2'>
      <MotionLink href="/"
      className="w-[130px] h-[130px] bg-light text-light dark:bg-dark flex items-center justify-center rounded-full text-2xl fount-bold border border-solid border-light dark:border-transparent"
      whileHover={{ 
        // backgroundColor:hoverBackgroundColor,
        transition: {duration:1, repeat: Infinity}
      }}><Image src={logoFM} alt="Fabian Morales"/>
      </MotionLink>
      </div>
  )
}

export default Logo