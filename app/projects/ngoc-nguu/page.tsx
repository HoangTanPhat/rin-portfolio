/* eslint-disable react/no-unescaped-entities */
import ProductBreadcrumbList from "@/components/layout/ProductBreadcrumbList";
import NgocNguuProjectsSection from "@/components/projects/ngoc-nguu/NgocNguuProjectsSection";
import { projectsItemList } from "@/lib/utils/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ngọc Ngưu - Projects | Rin Portfolio",
  description: "Hello :) Welcome to my portfolio website!",
};

export default function NgocNguuProjectsPage() {
  return (
    <div className="max-w-5xl m-auto">
      <hr className="border-textPrimary pb-5" />
      <h1 className="text-xl md:text-2xl text-textSecondary font-semibold text-center">
        Projects
      </h1>
      <ProductBreadcrumbList
        dividedPosition="bottom"
        active="ngoc-nguu"
        list={projectsItemList}
      />
      <div className="py-5">
        <p className="text-md md:text-xl text-center font-semibold">
          ABOUT PROJECT
        </p>
        <p className="text-md md:text-xl text-center">
          Ngọc Ngưu is a rice brand created to promote and develop Vietnamese
          products. Its logo features the image of a buffalo, a pearl, and a
          rice field—three elements that paint a distinctly Vietnamese picture
          and pay tribute to the folk wisdom of our ancestors: "A grain of rice
          is a pearl of heaven."
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
      <NgocNguuProjectsSection />
    </div>
  );
}
