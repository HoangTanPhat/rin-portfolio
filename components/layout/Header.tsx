"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import React from "react";
import NavBarButton from "./NavBarButton";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Image from "next/image";
import RLogo from "@/lib/images/R-logo.png";
import ILogo from "@/lib/images/I-logo.png";
import NLogo from "@/lib/images/N-logo.png";

export default function Header() {
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
                <DisclosureButton
                  aria-label="menu"
                  className="lg:hidden absolute right-4 inline-flex items-center justify-center text-neutral-50"
                >
                  {/* {open ? (
                    <XMenuIcon className="md:hover:fill-primary-50 fill-neutral-50" />
                  ) : (
                    <MenuIcon className="md:hover:fill-primary-50 fill-neutral-50" />
                  )} */}
                </DisclosureButton>
                <div className="flex flex-col justify-center space-y-4">
                  <p className="text-center text-base text-textSecondary">
                    Hello :)
                  </p>
                  <div className="flex flex-row justify-center relative">
                    {allHeaders.map((item) => {
                      return (
                        <div key={item.id} className='w-full text-center after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-black first:pl-2 first:pr-5 last:pr-2 last:pl-5 px-5'>
                          <NavBarButton {...item} />
                        </div>
                      );
                    })}
                  </div>
                  <div className="h-full flex items-center py-5">
                    <div className="flex flex-row relative my-10">
                      <Image
                        className="aspect-square w-[70px] h-[70px]"
                        src={RLogo}
                        width={70}
                        height={70}
                        alt="Picture of the author"
                      />
                      <div className="aspect-square w-[50px] h-[70px] relative justify-center flex">
                        <Image
                          src={ILogo}
                          width={30}
                          height={70}
                          alt="Picture of the author"
                        />
                      </div>

                      <Image
                        className="aspect-square w-[70px] h-[70px] relative"
                        src={NLogo}
                        width={70}
                        height={70}
                        alt="Picture of the author"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Toolbar>
          </div>
          {/* Mobile menu button */}

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
          </DisclosurePanel>
        </header>
      )}
    </Disclosure>
  );
}
