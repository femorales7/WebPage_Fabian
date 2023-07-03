import { React, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between ">
      <LiIcon reference={ref}/>
      <motion.div 
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:'spring'}}>
        <h3 className="capitalize font-bold text-2xl">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 ">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className=" pt-20">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor’s Degree, Systems Engineer"
            time="06/2010 – 08/2011"
            place="UNAD University, Bogotá, Colombia"
            info="The professional graduated from the Systems Engineering program at UNAD will be able to:

            Conceive, design, implement and operate systems, services and computer applications using the methods of software engineering as a tool for quality assurance.
            Model, design, implement and manage data and information, to ensure the operational availability of data and guarantee the production environment and management of large volumes of information.
            Ability to understand, implement, manage and ensure information security in information systems.
            Develop methods, tools and models to conceive, design, implement and operate information technologies for information processing and management."            
          />
         
        </ul>
      </div>
    </div>
  );
};

export default Education;
