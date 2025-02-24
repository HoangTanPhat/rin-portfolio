"use client";
import { NextSeo } from "next-seo";
import React from "react";
import Header from "./Header";
import Footer from './Footer';

interface LayoutContainerProps {
  children: React.ReactNode;
}

export default function LayoutContainer({ children }: LayoutContainerProps) {
  return (
    <>
      <NextSeo title="Nextjs Blog Template" />
      <Header />
      <div className='px-6'>{children}</div>
      <Footer />
    </>
  );
}
