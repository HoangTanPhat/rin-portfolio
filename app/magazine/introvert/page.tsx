import ProductBreadcrumbList from "@/components/layout/ProductBreadcrumbList";
import IntrovertMagazineSection from "@/components/magazine/introvert/IntrovertMagazineSection";
import { magazineItemList } from "@/lib/utils/constants";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Introvert - Magazine | Rin Portfolio',
  description: 'Hello :) Welcome to my portfolio website!'
}

export default function IntrovertMagazinePage() {
  return (
    <div className="max-w-5xl m-auto">
      <hr className="border-textPrimary pb-5" />
      <h1 className="text-xl md:text-2xl text-textSecondary font-semibold text-center">
        Magazine
      </h1>
      <ProductBreadcrumbList
        dividedPosition="bottom"
        active="introvert"
        list={magazineItemList}
      />
      <div className="py-5">
        <p className="text-md md:text-xl text-center font-semibold">INTRODUCTION</p>
        <p className="text-md md:text-xl text-center">
        This is a magazine for introverted individuals, exploring their thoughts, work, and life stories. With the support of Adobe Illustration, InDesign, and Photoshop, I meticulously design each vibrant page of the magazine.
        </p>
      </div>
      <div className="py-5">
        <p className="text-md md:text-xl text-center font-semibold">IDEA</p>
        <p className="text-md md:text-xl text-center text-textPink">
        Nguyen Trong Lai
        </p>
      </div>
      <div className="py-5">
        <p className="text-md md:text-xl text-center font-semibold">DESIGNER</p>
        <p className="text-md md:text-xl text-center text-textPink">
        Nguyen Trong Lai
        </p>
      </div>
       <IntrovertMagazineSection />
    </div>
  );
}
