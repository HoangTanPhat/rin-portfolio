import ProductBreadcrumbList from "@/components/layout/ProductBreadcrumbList";
import PhysiogelDetailSection from "@/components/social-media-post/physiogel/PhysiogelDetailSection";
import { socialMediaItemList } from "@/lib/utils/constants";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Physiogel - Works | Rin Portfolio',
  description: 'Hello :) Welcome to my world!'
}

export default function PhysiogelPage() {
  return (
    <main className='max-w-5xl m-auto'>
      <hr className='border-textPrimary pb-5' />
      <h1 className='text-2xl text-textSecondary font-semibold text-center'>Social Media Post</h1>
      <ProductBreadcrumbList dividedPosition="bottom" active="physiogel" list={socialMediaItemList} />
      <div className='py-5'>
          <h2 className='font-bold text-xl text-center'>PHYSIOGEL - LG</h2>
          <p className='text-xl text-center'>Visual Direction & Execution by Nguyen Trong Lai</p>
          <p className='text-xl text-center'>Worked at Xom Communication</p>
      </div>
      <PhysiogelDetailSection />
    </main>
  );
}
