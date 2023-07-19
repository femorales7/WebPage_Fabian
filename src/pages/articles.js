import React, { useRef } from "react";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import article1 from "../../public/images/articles/websockets.png";
import article2 from "../../public/images/articles/REvsJS.png";
import { easeInOut, motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

// when the user move the mouse ober te Other articles apear the image

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-20);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-60 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

// this is for more articles listed below the main articles
const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-1 py-6 my-4 rounded-xl flex items-center
    justify-between bg-light text-dark first:mt-0 border border-solid border-dark
    border-r-4 border-red-r-4 dark:border-light dark:bg-dark dark:text-light
    sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-blue-700  dark:text-blue-400 font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">{date}</span>
    </motion.li>
  );
};

const FeatureArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className=" relative col-san-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div
        className="absolute top-0 -right-3 left-0 -z-10 w-[102%]  h-[102%] rounded-[2.9rem] bg-dark  dark:bg-light
      rounded-br-3xl"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto rounded-2xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-blue-700 font-semibold dark:text-blue-400">{time}</span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Fabian Morales | Articles Page</title>
        <meta
          name="description"
          content="These are the articles written by Fabian Morales"
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="The best way to learn is to never lose your curiosity."
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
            <FeatureArticle
              title="WebSocket Libraries: Building Real-time Apps with SockJS, ws, Socket.IO, and More"
              summary="
              The article discusses the importance of WebSockets in building real-time web applications. It explains that WebSockets enable efficient bidirectional communication between browsers and servers, offering advantages such as low latency and wide compatibility. The article highlights several popular WebSocket libraries like SockJS, ws, Socket.IO, and others, which simplify the implementation process. It suggests experimenting with these libraries to gain practical experience and recommends starting with small projects to understand their features. Overall, WebSockets and these libraries help developers create interactive and responsive real-time applications."
              time="5 min read"
              link="https://medium.com/@femorales7/websocket-libraries-building-real-time-apps-with-sockjs-ws-socket-io-and-more-52bc15e92f16"
              img={article1}
            />

            <FeatureArticle
              title="Exploring the Benefits of Using React Instead of Plain JavaScript"
              summary="
              This article explores the benefits of using React instead of plain JavaScript for web development. It highlights advanced component composition and reusability, the power of JSX syntax, efficient rendering with the virtual DOM, enhanced performance through React Fiber, state management with Redux or the Context API, performance optimization techniques, and the extensive ecosystem and community support surrounding React. By leveraging these advantages, developers can create highly efficient, scalable, and maintainable web applications."
              time="4 min read"
              link="https://medium.com/@femorales7/exploring-the-benefits-of-using-react-instead-of-plain-javascript-6e3020a79b54"
              img={article2}
            />
          </ul>

          {/* This is for future articles */}
          {/* <h2 className="font-bold text-4xl w-full text-center my-16 pt-20">
            All Articles
          </h2>
          <ul>
            <Article
              title="Name of article"
              date="July 04, 2023 "
              link="Link Artlcle"
              img={article2}
            />
          </ul> */}
        </Layout>
      </main>
    </>
  );
};

export default articles;
