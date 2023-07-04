import React from "react";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import article1 from "../../public/images/articles/article1.PNG"
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeatureArticle = ({img, title, time, summary, link}) => {
  return (
    <li className="col-san-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto rounded-2xl" 
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}/>
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline">{title}</h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-blue-700 font-semibold">{time}</span>
    </li>

  )
}

const articles = () => {
  return (
    <>
      <Head>
        <title>Fabian Morales | About Page</title>
        <meta
          name="description"
          content="This page is for portafolio of full stack developer Fabian Morales"
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="WebSocket Libraries: Building Real-time Apps with SockJS, ws, Socket.IO, and More"
            className="mb-16"
          />
          <ul className="grid grid-cols-2 gap-16">
            
              <FeatureArticle
              title="WebSocket Libraries: Building Real-time Apps with SockJS, ws, Socket.IO, and More"
              summary="
              The article discusses the importance of WebSockets in building real-time web applications. It explains that WebSockets enable efficient bidirectional communication between browsers and servers, offering advantages such as low latency and wide compatibility. The article highlights several popular WebSocket libraries like SockJS, ws, Socket.IO, and others, which simplify the implementation process. It suggests experimenting with these libraries to gain practical experience and recommends starting with small projects to understand their features. Overall, WebSockets and these libraries help developers create interactive and responsive real-time applications."
              time="5 min read"
              link="https://medium.com/@femorales7/websocket-libraries-building-real-time-apps-with-sockjs-ws-socket-io-and-more-52bc15e92f16"
              img={article1}
              />
             
              
              <FeatureArticle
              title="WebSocket Libraries: Building Real-time Apps with SockJS, ws, Socket.IO, and More"
              summary="
              The article discusses the importance of WebSockets in building real-time web applications. It explains that WebSockets enable efficient bidirectional communication between browsers and servers, offering advantages such as low latency and wide compatibility. The article highlights several popular WebSocket libraries like SockJS, ws, Socket.IO, and others, which simplify the implementation process. It suggests experimenting with these libraries to gain practical experience and recommends starting with small projects to understand their features. Overall, WebSockets and these libraries help developers create interactive and responsive real-time applications."
              time="5 min read"
              link="https://medium.com/@femorales7/websocket-libraries-building-real-time-apps-with-sockjs-ws-socket-io-and-more-52bc15e92f16"
              img={article1}
              />
              
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
