import React from "react";
import { motion } from "framer-motion";
import html from "../../public/images/svgs/htmLogo.svg"
import ReactJS from "../../public/images/svgs/reactLogo.svg"
import JavaScript from "../../public/images/svgs/javascript.svg"
import Mocha from "../../public/images/svgs/mocha.svg"
import CSS from '../../public/images/svgs/csslogo.svg'
import Cypress from "../../public/images/svgs/cypress.svg"
import Ruby from "../../public/images/svgs/Ruby.svg"
import SQL from "../../public/images/svgs/sqlLogo.svg"
import NodeJs from "../../public/images/svgs/nodeJS.svg"
import scrum from "../../public/images/svgs/Scrum.svg"
import Git from '../../public/images/svgs/Git.svg'
import Express from "../../public/images/svgs/Express.svg"
import jQuery from "../../public/images/svgs/jQuery.svg"
import SASS from "../../public/images/svgs/SASS.svg"
import Rails from "../../public/images/svgs/Rails.svg"
import Image from "next/image";

const Skill = ({ src, x, y, name }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center rounded-full font-semibold  text-dark
        py-1 px-0 shadow-dark cursor-pointer absolute dark:text-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >

      <Image src={src} className="w-[10%] h-[10%]  fill-dark  dark:fill-light"/>{name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-55 py-20  w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light  lg-p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill src={html} x="-16vw" y="-2vw" name='Html'/>
        <Skill src={ReactJS} x="-5vw" y="-23vw" name='ReactJs' />
        <Skill src={JavaScript} name="JavaScript" x="4vw" y="20vw" />
        <Skill src={Mocha} name="Mocha" x="39vw" y="8vw" />
        <Skill src={CSS} name="CSS" x="0vw" y="9vw" />
        <Skill src={Cypress} name="Cypress" x="-20vw" y="-15vw" />
        <Skill src={Ruby} name="Ruby" x="18vw" y="-12vw" />
        <Skill src={SQL} name="SQL" x="32vw" y="-5vw" />
        <Skill src={NodeJs} name="Node.Js" x="-0vw" y="-13vw" />
        <Skill src={scrum} name="Scrum" x="-35vw" y="-13vw" />
        <Skill src={Git} name="Git" x="21vw" y="-20vw" />
        <Skill src={Express} name="Express.Js" x="20vw" y="13vw" />
        <Skill src={jQuery} name="jQuery" x="-19vw" y="14vw" />
        <Skill src={SASS} name="SASS" x="-15vw" y="9vw" />
        <Skill src={Rails} name="Rails" x="-30vw" y="10vw" />
      </div>
    </>
  );
};

export default Skills;
