import Link from "next/link";
import React from "react";
import {motion} from "framer-motion"
import logoFM from "../../public/images/logo.png"
import Image from "next/image";

const MotionLink = motion(Link)

const Logo = ({mode}) => {
 
  return(
    <div className='flex items-center justify-center mt-2 xs:mt-0'>
      <MotionLink href="/"
      className="w-[130px] h-[130px] xs:w-[90px] xs:h-[90px]  bg-light dark:bg-dark flex items-center justify-center rounded-full text-2xl fount-bold border border-solid border-light dark:border-transparent"
      whileHover={{ 
        // backgroundColor:hoverBackgroundColor,
        transition: {duration:1, repeat: Infinity}
      }}><Image src={logoFM} alt="Fabian Morales"/>
      </MotionLink>
      </div>
  )
}

export default Logo