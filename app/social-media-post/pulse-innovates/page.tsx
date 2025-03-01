import ProductBreadcrumbList from "@/components/layout/ProductBreadcrumbList";
import PulseViralDetailSection from "@/components/social-media-post/pulse-innovates/PulseViralDetailSection";
import NSingDetailSection from "@/components/social-media-post/pulse-innovates/NSingDetailSection";
import XynioDetailSection from "@/components/social-media-post/pulse-innovates/XynioDetailSection";
import { socialMediaItemList } from "@/lib/utils/constants";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pulse Innovates - Social Media Post | Rin Portfolio',
  description: 'Hello :) Welcome to my portfolio website!'
}

export default function PulseInnovatesPage() {
  return (
    <div className='max-w-5xl m-auto'>
      <hr className='border-textPrimary pb-5' />
      <h1 className='text-xl md:text-2xl text-textSecondary font-semibold text-center'>Social Media Post</h1>
      <ProductBreadcrumbList dividedPosition="bottom" active="pulse-innovates" list={socialMediaItemList} />
      <div className='py-5'>
          <h2 className='font-bold text-md md:text-xl text-center'>PULSE INNOVATES | PULSE VIRAL</h2>
          <p className='text-md md:text-xl text-center'>Visual Direction & Execution by <span className='whitespace-pre md:whitespace-normal'>Nguyen Trong Lai</span></p>
          <p className='text-md md:text-xl text-center'>Worked at Pulse Innovates</p>
      </div>
      <PulseViralDetailSection />
      <div className='py-5'>
          <h2 className='font-bold text-md md:text-xl text-center'>PULSE INNOVATES | NSING</h2>
          <p className='text-md md:text-xl text-center'>Visual Direction & Execution by <span className='whitespace-pre md:whitespace-normal'>Nguyen Trong Lai</span></p>
          <p className='text-md md:text-xl text-center'>Worked at Pulse Innovates</p>
      </div>
      <NSingDetailSection />
      <div className='py-5'>
          <h2 className='font-bold text-md md:text-xl text-center'>PULSE INNOVATES | XYNIO</h2>
          <p className='text-md md:text-xl text-center'>Visual Direction & Execution by <span className='whitespace-pre md:whitespace-normal'>Nguyen Trong Lai</span></p>
          <p className='text-md md:text-xl text-center'>Worked at Pulse Innovates</p>
      </div>
      <XynioDetailSection />
    </div>
  );
}
