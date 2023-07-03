import { React, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, addres, work }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between ">
      <LiIcon reference={ref}/>
      <motion.div 
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:'spring'}}>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-blue-700 capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 ">
          {time} | {addres}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className=" pt-20">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="volunteer support technician"
            company="SpanicArt"
            companyLink="https://www.spanicarts.com/"
            time="11/2018 – 06/2022"
            addres="Calgary, Canada"
            work="Website administration, updating new information on different platforms such as Facebook, Instagram and website.
            Technical assistance to personnel, computer troubleshooting and consulting. Assistance in the organization of events and meetings
            "
          />
          <Details
            position="Support specialist"
            company="Consulate of Colombia in Calgary"
            companyLink="https://calgary.consulado.gov.co/"
            time="11/2017 – 03/2021"
            addres="Calgary, Canada"
            work="Hardware, software and network support.
            Advice on the acquisition of equipment and technology. Workstation installation and maintenance.
          "
          />
          <Details
            position="Technical Engineer"
            company="Ministry of Foreign Affairs of Colombia"
            companyLink="https://www.cancilleria.gov.co/"
            time="02/2013 – 11/2017"
            addres="Bogota, Colombia"
            work="Supervise the performance of the software development team and quality testing from the role of Scrum Master.
          Verification of desired functionality and performance according to customer specifications and requirements through test procedures.
          Documenting repair processes and helped simplify procedures for future technical assistance actions.
          Second level of IT support to Colombian diplomatic missions around the world.
          Writing technical documents, user manuals, application documentation and software requirements.
          Queries and updates of information in SQL databases.
          "
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
