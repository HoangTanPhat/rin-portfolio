import ProductBreadcrumbList from "@/components/layout/ProductBreadcrumbList";
import TigerBalmDetailSection from "@/components/social-media-post/tiger-balm/TigerBalmDetailSection";
import { socialMediaItemList } from "@/lib/utils/constants";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tiger Balm - Works | Rin Portfolio',
  description: 'Hello :) Welcome to my world!'
}

export default function TigerBalmPage() {
  return (
    <div className='max-w-5xl m-auto'>
      <hr className='border-textPrimary pb-5' />
      <h1 className='text-xl md:text-2xl text-textSecondary font-semibold text-center'>Social Media Post</h1>
      <ProductBreadcrumbList dividedPosition="bottom" active="tiger-balm" list={socialMediaItemList} />
      <div className='py-5'>
          <h2 className='font-bold text-md md:text-xl text-center'>TIGER BALM</h2>
          <p className='text-md md:text-xl text-center'>Visual Direction & Execution by <span className='whitespace-pre md:whitespace-normal'>Nguyen Trong Lai</span></p>
          <p className='text-md md:text-xl text-center'>Worked at Xom Communication</p>
      </div>
      <TigerBalmDetailSection />
    </div>
  );
}
