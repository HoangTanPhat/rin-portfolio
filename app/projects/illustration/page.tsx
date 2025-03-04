/* eslint-disable react/no-unescaped-entities */
import ProductBreadcrumbList from "@/components/layout/ProductBreadcrumbList";
import IllustrationProjectsSection from "@/components/projects/illustration/IllustrationProjectsSection";
import { projectsItemList } from "@/lib/utils/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Illustration - Projects | Rin Portfolio",
  description: "Hello :) Welcome to my portfolio website!",
};

export default function IllustrationProjectsPage() {
  return (
    <div className="max-w-5xl m-auto">
      <hr className="border-textPrimary pb-5" />
      <h1 className="text-xl md:text-2xl text-textSecondary font-semibold text-center">
        Projects
      </h1>
      <ProductBreadcrumbList
        dividedPosition="bottom"
        active="illustration"
        list={projectsItemList}
      />
      <IllustrationProjectsSection />
    </div>
  );
}
