import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x:x, y:y }}
      transition={{ duration: 1.5 }}
      viewport={{once:true}}
    >
      {name}
    </motion.div>
  )
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-55 py-20  w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="Html" x="-20vw" y="-2vw" />
        <Skill name="React.js" x="-5vw" y="-08vw" />
        <Skill name="JavaScript" x="18vw" y="6vw" />
        <Skill name="Mocha" x="39vw" y="8vw" />
        <Skill name="CSS" x="0vw" y="12vw" />
        <Skill name="Cypress" x="-20vw" y="-17vw" />
        <Skill name="Ruby" x="18vw" y="-12vw" />
        <Skill name="SQL" x="32vw" y="-5vw" />
        <Skill name="Node.Js" x="-0vw" y="-21vw" />
        <Skill name="Scrum" x="-35vw" y="-13vw" />
        <Skill name="Git" x="21vw" y="-21vw" />
        <Skill name="Express.Js" x="20vw" y="17vw" />
        <Skill name="jQuery" x="-15vw" y="14vw" />
        <Skill name="SASS" x="-15vw" y="23vw" />
        <Skill name="Rails" x="-30vw" y="10vw" />

      </div>
    </>
  );
};

export default Skills;
