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
      <main className='px-6'>{children}</main>
      <Footer />
    </>
  );
}
