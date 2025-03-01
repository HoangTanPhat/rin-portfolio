/* eslint-disable react/no-unescaped-entities */
import DangKhoiTravelBrandingSection from "@/components/branding/dang-khoi-travel/DangKhoiTravelBrandingSection";
import ProductBreadcrumbList from "@/components/layout/ProductBreadcrumbList";
import { brandingItemList } from "@/lib/utils/constants";

export default function DangKhoiTravelBrandingPage() {
  return (
    <div className="max-w-5xl m-auto">
      <hr className="border-textPrimary pb-5" />
      <h1 className="text-xl md:text-2xl text-textSecondary font-semibold text-center">
        Branding
      </h1>
      <ProductBreadcrumbList
        dividedPosition="bottom"
        active="dang-khoi-travel"
        list={brandingItemList}
      />
      <div className="pt-5 pb-10">
        <p className="text-md md:text-xl text-center">
          <span className="font-semibold">Designer: </span><span className='text-textPink'>Nguyen Trong Lai</span>
        </p>
      </div>
      <DangKhoiTravelBrandingSection />
    </div>
  );
}
