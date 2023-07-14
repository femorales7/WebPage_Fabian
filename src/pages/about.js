import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import ProfilePhoto from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useSpring, useMotionValue } from "framer-motion";
import { redirect } from "next/dist/server/api-utils";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView( ref, {once:true} );

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current  && latest.toFixed(0) <= value){
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Fabian Morales | About Page</title>
        <meta
          name="description"
          content="This page is for portafolio of full stack developer Fabian Morales"
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-10 ">
          <AnimatedText
            text="Perseverance, Discipline and Passion are the keys to achieving goals."
            className="mb-16 text-8xl lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 "
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8  ">
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hello I am Fabian Morales, a System Engineer and full-stack
                developer. Throughout my career, I have excelled in roles such
                as 1st and 2nd level support, manual testing, and Scrum master.
                My proficiency extends to research, planning, design,
                development, and testing of end-to-end web applications that
                meet client needs. I am driven by results and dedicated to
                delivering high-quality work.
              </p>

              <p className="  my-4 font-medium">
                In terms of skills, I am well-versed in languages such as
                JavaScript, Ruby, HTML, and CSS. I am also proficient in various
                testing tools including Cypress, RSpec, Jest, Mocha, Chai, and
                manual testing. Additionally, I have expertise in frameworks and
                libraries such as NodeJS, ReactJS, Ajax, Express, EJS, jQuery,
                Bootstrap, ActiveRecord, Rails, and SASS. I am familiar with
                systems and databases like SQL and Git. Fluent in English and
                Spanish. Furthermore, I have additional knowledge in SCRUM
                methodologies, hardware, software and network support, as well
                as MS TFS and MS Office configuration and maintenance.
              </p>

              <p className=" my-4 font-medium">
                In my professional experience, I have played the role of Scrum
                Master, Tester and second support in these different roles I
                also acquired the ability to perform different types of
                documentation such as manuals, user stories and bugs and
                requirements. I have played different roles such as
                administrator of social media platforms and websites, technical
                support provider .I have also provided hardware, software and
                network support, as well as advice on equipment procurement,
                installation and maintenance of workstations.
              </p>

              <p className=" font-medium">
                Overall, my diverse skill set, extensive experience, and
                dedication to excellence make me a valuable professional in the
                field of IT.
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark 
                bg-light p-8  dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 "
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%]  h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={ProfilePhoto}
                alt="Fabian Morales"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </div>
            {/* <div className="col-span-2 flex flex-col items-end justify-between  xl:items-center xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm
                ">
                  Satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75xl:text-center md:text-lg sm:text-base
                xs:text-sm">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm">
                  Years of experience
                </h2>
              </div>
            </div> */}
          </div>
          <Skills/>
          <Experience/>
          <Education/>
        </Layout>
      </main>
    </>
  );
};

export default about;
