import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Fabian Morales Page</title>
        <meta name="description" content="Fabian's Portfolio as Full Stack Web Developer" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Fabian Morales"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center pt-4">
              <AnimatedText
                text="Turning needs into web solutions"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl pt-10 md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a full-stack developer, I transform your challenges and needs
                into web solutions. Take a look at my projects, and you will
                appreciate my work in different web development languages.
              </p>
              <div className="flex items-cener self-start mt-2 lg:self-center">
                <Link
                  href="/Resume_Fabian_Morales.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark 
                border border-solid border-trasparen hover:border-dark
                 dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light
                 hover:dark:border-light md:p-2 md:px-4 md:text-base
                " 
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:femorales7@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg fount-medium capitalize
                text-dark underline pt-2 dark:text-light md:text-base
                "
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        
        <HireMe/>
        <div className="absolute right-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="Fabian Morales" className="w-full h-auto md:hidden xl:hidden"/>
        </div>
      </main>
    </>
  );
}
