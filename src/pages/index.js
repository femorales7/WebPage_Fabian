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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="CodeBucks"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center ">
              <AnimatedText
                text="Creating needs in web solutions"
                className="!text-4xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                As a full-stack developer, I transform your challenges and needs
                into web solutions. Take a look at my projects, and you will
                appreciate my work in different web development languages.
              </p>
              <div className="flex items-cener self-start mt-2">
                <Link
                  href="/Fabian_Morales_Resume_02-06-2023-01-04-26.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark 
                border border-solid border-trasparen hover:border-dark
                "
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:femorales7@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg fount-medium capitalize
                text-dark underline pt-2
                "
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe/>
        <div className="absolute right-8 inline-block w-24">
          <Image src={lightBulb} alt="Codebucks" className="w-full h-auto"/>
        </div>
      </main>
    </>
  );
}
