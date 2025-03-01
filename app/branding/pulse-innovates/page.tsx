/* eslint-disable react/no-unescaped-entities */
import PulseInnovatesBrandingSection from "@/components/branding/pulse-innovates/PulseInnovatesBrandingSection";
import ProductBreadcrumbList from "@/components/layout/ProductBreadcrumbList";
import { brandingItemList } from "@/lib/utils/constants";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pulse Innovates - Branding | Rin Portfolio',
  description: 'Hello :) Welcome to my portfolio website!'
}

export default function PulseInnovatesBrandingPage() {
  return (
    <div className="max-w-5xl m-auto">
      <hr className="border-textPrimary pb-5" />
      <h1 className="text-xl md:text-2xl text-textSecondary font-semibold text-center">
        Branding
      </h1>
      <ProductBreadcrumbList
        dividedPosition="bottom"
        active="pulse-innovates"
        list={brandingItemList}
      />
      <div className="py-5 space-y-5">
        <p className="text-md md:text-xl text-center font-semibold">
          ABOUT
        </p>
        <p className="text-md md:text-xl text-center">
         At Pulse Innovates, we are the driving force behind your brand's evolution. As a team of dedicated marketing pioneers and creative visionaries, we craft dynamic campaigns that inspire change and deliver impactful results.
        </p>
        <p className="text-md md:text-xl text-center">
          <span className="font-semibold">Managing Director:</span> Sim Ai Sing
        </p>
        <p className="text-md md:text-xl text-center">
          <span className="font-semibold">Designer: </span><span className='text-textPink'>Nguyen Trong Lai</span>
        </p>
        <p className="text-md md:text-xl text-center font-semibold">
          BRAND GUIDELINES
        </p>
      </div>
      <PulseInnovatesBrandingSection />
    </div>
  );
}
