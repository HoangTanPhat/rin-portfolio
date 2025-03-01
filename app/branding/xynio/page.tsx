/* eslint-disable react/no-unescaped-entities */
import XynioBrandingSection from "@/components/branding/xynio/XynioBrandingSection";
import ProductBreadcrumbList from "@/components/layout/ProductBreadcrumbList";
import { brandingItemList } from "@/lib/utils/constants";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Xynio - Branding | Rin Portfolio',
  description: 'Hello :) Welcome to my portfolio website!'
}

export default function XynioBrandingPage() {
  return (
    <div className="max-w-5xl m-auto">
      <hr className="border-textPrimary pb-5" />
      <h1 className="text-xl md:text-2xl text-textSecondary font-semibold text-center">
        Branding
      </h1>
      <ProductBreadcrumbList
        dividedPosition="bottom"
        active="xynio"
        list={brandingItemList}
      />
     <div className="py-5 space-y-5">
        <p className="text-md md:text-xl text-center font-semibold">
          ABOUT
        </p>
        <p className="text-md md:text-xl text-center">
        We are a leading chip component company that serves multiple industries, with a special focus on the automotive sector. Our company provides a wide range of chip components, including microcontroller, microprocessors, and memory modules, designed to enhance the performance of vehicles.
        </p>
        <p className="text-md md:text-xl text-center">
          <span className="font-semibold">Designer: </span><span className='text-textPink'>Nguyen Trong Lai</span>
        </p>
        <p className="text-md md:text-xl text-center font-semibold">
          BRAND GUIDELINES
        </p>
      </div>
      <XynioBrandingSection />
    </div>
  );
}
