import React from 'react'
import { motion, useScroll } from 'framer-motion'

const LiIcon = ({reference}) => {
  
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className='absolute left-0 stroke-dark dark:stroke-light '>
      <svg className='-rotate-90' width='75' height='75' viewBox='0 0 100 100'>
        <circle cx='75' cy='50' r='20' className='stroke-blue-700 dark:stroke-blue-400 stroke-1 fill-none'/>
        <motion.circle cx='75' cy='50' r='20' className=' stroke-[5px] fill-light dark:fill-dark'
        style={{
          pathLength: scrollYProgress
        }}/>
        <circle cx='75' cy='50' r='10' className=' animate-pulse stroke-1 fill-blue-700 dark:fill-blue-400'/>
      </svg>

    </figure>
  )
}

export default LiIcon