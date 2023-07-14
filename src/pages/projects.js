import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import Image from "next/image";
import Examgenie from "../../public/images/projects/Exam_genie.png";
import Resource_Wall from "../../public/images/projects/Resource_Wall.png"
import photolabs from "../../public/images/projects/photolabs.png"
import JunglePage from "../../public/images/projects/JunglePage.png"
import Tweeter from "../../public/images/projects/Tweeter.png"
import TinyApp from "../../public/images/projects/TinyApp.png"
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeatureProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between 
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl  dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 left-0 -z-10 w-[101%]  h-[103%] rounded-[3rem] bg-dark  dark:bg-light
      rounded-br-3xl xs:-right-2 sm:h-[101%] xs:w-[101%] xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto"
        whileHover={{scale:1.05}}
        transition={{duration:0.2}} 
        priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"/>
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-blue-700 font-medium text-xl dark:text-blue-400 xs:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light
          p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base
          "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl 
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
    xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 left-0 -z-10 w-[102%]  h-[103%] rounded-[2.9rem] bg-dark 
      rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto" 
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}/>
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-blue-700 font-medium text-xl dark:text-blue-400 lg:text-lg md:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">{title}</h2>
        </Link>

        <div className=" w-full mt-2 flex items-center justify-between ">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>Fabian Morales | Projects Page</title>
        <meta
          name="description"
          content="This page is all projects of full stack developer Fabian Morales"
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="The limits of knowledge are as far as imagination can reach."
            className="mb-40 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-36 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeatureProject
                title="Exam Genie"
                img={Examgenie}
                summary="This project is a question generator for the preparation of different types of tests, the questions are generated by artificial intelligence as well as the feedback of the correct answer, has within its components a section for challenge or game to study in group, the application saves the history of the exams for future reference."
                link="https://github.com/femorales7/exam-genie"
                github="https://github.com/femorales7/exam-genie"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 ">
              <Project
                title="Jungle"
                img={JunglePage}
                summary="A mini e-commerce application built with Rails 6.1 I have implemented Shoping car , login features, product list, inventory management."
                link="https://github.com/femorales7/resource-wall"
                github="https://github.com/femorales7/resource-wall"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="photolabs"
                img={photolabs}
                summary="The PhotoLabs project is the application for displaying different photos from the postgress database and the frontend processes were developed in React."
                link="https://github.com/femorales7/photolabs-starter"
                github="https://github.com/femorales7/photolabs-starter"
                type="Featured Project"
              />
            </div>

            <div className="col-span-12">
            <FeatureProject
                title="Resource Wall"
                img={Resource_Wall}
                summary="The resource wall is a project in which are published some photos related to different topics, in each post or photo is available the option to go to a URL to get more information on that topic, allow to leave a comment, rate the post and make a like. The page has the option to new post, and change profile details, and check own resources."
                link="https://github.com/femorales7/exam-genie"
                github="https://github.com/femorales7/exam-genie"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">

              <Project
                title="Tweeter Clone"
                img={Tweeter}
                summary="This Project I implemented different resources such as javascript, ajax, nodejs, html and css, we used asynchronous coding methods and you can see how the application reacts in real time to the different imputs that the user makes, it will also have a different design performance when changing the size of the image."
                link="https://github.com/femorales7/tweeter"
                github="https://github.com/femorales7/tweeter"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="TinyApp"
                img={TinyApp}
                summary="TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly). This project has encrypted password security and encrypted cookies as well as a redirect if someone tries to enter without permissions."
                link="https://github.com/femorales7/tinyapp"
                github="https://github.com/femorales7/tinyapp"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
