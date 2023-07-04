import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Logo from "./logo";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./Icons";
import {motion} from "framer-motion"
import useThemeSwitcher from "./hooks/useThemeSwitcher";


const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[3px] inline-block bg-dark
      absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher()
  return (
    <header className="w-full px-32 py-8  font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>

      <nav className="flex items-center  justify-center flex-wrap-rev ">
        <motion.a href="https://github.com/femorales7" target={"_blank"}
        whileHover={{y:-2}}
        className="w-6 mr-3"
        whileTap={{scale:0.9}}>
          <GithubIcon/>
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/fabian-morales-782b02145" target={"_blank"}
        whileHover={{y:-2}}
        className="w-6 mr-3"
        whileTap={{scale:0.9}}>
          <LinkedInIcon/>
        </motion.a>
        {/* <motion.a href="/" target={"_blank"}
        whileHover={{y:-2}}
        className="w-6 mr-3"
        whileTap={{scale:0.9}}>
          
        </motion.a>
        
        <motion.a href="/" target={"_blank"}
        whileHover={{y:-2}}
        className="w-6 mr-3"
        whileTap={{scale:0.9}}>
          <SunIcon/>
        </motion.a> */}

        <button
        onClick={() => setMode (mode === 'light' ? 'dark' : 'light')}>
          {
            mode==="dark" ?
            <SunIcon className={'fill-dark'}/>
            :
            <MoonIcon className={'fill-dark'}/>

          }

        </button>
        
      </nav>
      <div className="absolute left-[50%] top-2  traslate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
