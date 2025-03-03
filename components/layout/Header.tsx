"use client";

import {
  Disclosure,
} from "@headlessui/react";
import React, { useEffect } from "react";
import NavBarButton from "./NavBarButton";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Image from "next/image";
import RLogo from "@/lib/images/R-logo.png";
import ILogo from "@/lib/images/I-logo.png";
import NLogo from "@/lib/images/N-logo.png";
import { motion, useAnimation } from "framer-motion";

export default function Header() {
  const helloTextAnimation = useAnimation();
  const navBarButtonsAnimation = useAnimation();
  const nameContainerAnimation = useAnimation();

  useEffect(() => {
    async function sequence() {
      await helloTextAnimation.start({ opacity: 1, y: 0, transition: { duration: 0.3 } });
      await navBarButtonsAnimation.start({ opacity: 1, y: 0, transition: { duration: 0.3 } });
      await nameContainerAnimation.start("show"); // Start nameContainer animation last
    }

    sequence();
  }, [helloTextAnimation, navBarButtonsAnimation, nameContainerAnimation]);

  const nameContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
      },
    },
  };
  
  const RVariants = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const IVariants = {
    hidden: { opacity: 0, scale: 0.2 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  }

  const NVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const allHeaders = [
    {
      id: "works",
      title: "Works",
      href: "/",
    },
    {
      id: "about",
      title: "About",
      href: "/about",
    },
  ];
  
  return (
    <Disclosure as="nav">
      {() => (
        <header className="inset-x-0 top-0 z-50 px-4 md:px-6">
          <div className='max-w-5xl bg-transparent m-auto py-5'>
            <Toolbar variant="dense" sx={{ justifyContent: "center" }}>
              <div className="flex flex-row items-center justify-center gap-5 max-w-7xl">
                <div className="flex flex-col justify-center space-y-4">
                  <motion.p id="hello-text"  initial={{ opacity: 0, y: 50 }} animate={helloTextAnimation} className="text-center text-base text-textSecondary">
                    Hello :)
                  </motion.p>
                  <motion.div initial={{ opacity: 0, y: 50 }} animate={navBarButtonsAnimation} transition={{
                    ease: ['linear']
                  }} className="flex flex-row justify-center relative header-button-transition">
                    {allHeaders.map((item) => {
                      return (
                        <div key={item.id} className='w-full text-center after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-black first:pl-2 first:pr-5 last:pr-2 last:pl-5 px-5'>
                          <NavBarButton {...item} />
                        </div>
                      );
                    })}
                  </motion.div>
                  <div className="h-full flex items-center py-5">
                    <motion.div variants={nameContainerVariants}  initial="hidden"
      animate={nameContainerAnimation} className="flex flex-row relative my-10">
                      <motion.div variants={RVariants}>
                      <Image
                        className="aspect-square w-[70px] h-[70px]"
                        src={RLogo}
                        width={70}
                        height={70}
                        alt="Picture of the author"
                      />
                      </motion.div>
                      
                      <motion.div variants={IVariants} className="aspect-square w-[50px] h-[70px] relative justify-center flex">
                        <Image
                          src={ILogo}
                          width={30}
                          height={70}
                          alt="Picture of the author"
                        />
                      </motion.div>
                    <motion.div variants={NVariants}>
                      <Image
                        className="aspect-square w-[70px] h-[70px] relative"
                        src={NLogo}
                        width={70}
                        height={70}
                        alt="Picture of the author"
                      />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </Toolbar>
          </div>
          {/* Mobile menu button

          <DisclosurePanel className="lg:hidden mt-[72px] h-[calc(100vh-72px)] bg-[rgba(20,20,22,0.9)] px-6 backdrop-blur-sm">
            <div className="flex flex-col pb-6">
              <div className="overflow-x-none grow overflow-y-auto shadow-inner">
                {allHeaders.map((item) => {
                  return (
                    <div key={item.id}>
                      <NavBarButton {...item} />
                    </div>
                  );
                })}
              </div>
            </div>
          </DisclosurePanel> */}
        </header>
      )}
    </Disclosure>
  );
}
