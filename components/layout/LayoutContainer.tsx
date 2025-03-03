'use client'

import React from "react";
import Header from "./Header";
import Footer from './Footer';
interface LayoutContainerProps {
  children: React.ReactNode;
}

export default function LayoutContainer({ children }: LayoutContainerProps) {

  return (
    <>
      <Header />
      <main className='px-4 md:px-6 max-w-5xl m-auto banner-transition'>{children}</main>
      <Footer />
    </>
  );
}
