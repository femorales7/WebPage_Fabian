import { React, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Boot Camp Fulls Stack Web Developer"
            time="04/2023 – 07/2023"
            place="Light House Labs, Calgary - AB"
            info="I gained fundamental web development knowledge, real-world experience and critical soft skills you need to achieve a rewarding career as a full-stack developer. I dove into modules on front-end fundamentals like JavaScript, CSS and HTML, software architecture, database and data modeling, component-based design and much more. Throughout the course, I also had access to on-demand mentoring from industry experts."
          />

          <Details
            type="Bachelor’s Degree, Systems Engineer"
            time="06/2010 – 08/2011"
            place="UNAD University, Bogotá, Colombia"
            info="As a professional graduate of the Systems Engineering program at UNAD I am able to:

            Conceive, design, implement and operate systems, services and computer applications using software engineering methods as a tool for quality assurance.
            Model, design, implement and manage data and information, to ensure the operational availability of data and guarantee the production and management environment of large volumes of information.
            Ability to understand, implement, manage and ensure information security in information systems.
            Develop methods, tools and models to conceive, design, implement and exploit information technologies for information processing and management."
          />
          <Details
            type="Diploma Maintenance of Computer Equipment"
            time="06/2010 – 08/2011"
            place="National Learning SENA, Bogotá, Colombia "
            info="As a graduate of Maintenance of Computer Equipment I am able to perform preventive and corrective maintenance to PCs, laptops and mobiles; perform the assembly of computer systems, establish and diagnose connectivity in a network and structure a technical support plan, responding to the needs of companies in all sectors."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
