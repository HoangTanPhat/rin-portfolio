/* eslint-disable react/no-unescaped-entities */
import ProductBreadcrumbList from "@/components/layout/ProductBreadcrumbList";
import CospanProjectsSection from "@/components/projects/cospan/CospanProjectsSection";
import { projectsItemList } from "@/lib/utils/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cospan - Projects | Rin Portfolio",
  description: "Hello :) Welcome to my portfolio website!",
};

export default function CospanProjectsPage() {
  return (
    <div className="max-w-5xl m-auto">
      <hr className="border-textPrimary pb-5" />
      <h1 className="text-xl md:text-2xl text-textSecondary font-semibold text-center">
        Projects
      </h1>
      <ProductBreadcrumbList
        dividedPosition="bottom"
        active="cospan"
        list={projectsItemList}
      />
      <div className="py-5">
        <p className="text-md md:text-xl text-center font-semibold">
          ABOUT PROJECT
        </p>
        <p className="text-md md:text-xl text-center">
          Cospan is a new cosmetic brand in the Vietnamese market. We focus on
          developing innovative products with natural ingredients, empowering
          Vietnamese people with confidence.
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
      <CospanProjectsSection />
    </div>
  );
}
