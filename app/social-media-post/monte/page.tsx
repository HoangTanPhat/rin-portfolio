import ProductBreadcrumbList from "@/components/layout/ProductBreadcrumbList";
import MonteDetailSection from "@/components/social-media-post/monte/MonteDetailSection";
import { socialMediaItemList } from "@/lib/utils/constants";

export default function MontePage() {
  return (
    <div className='max-w-5xl m-auto'>
      <hr className='border-textPrimary pb-5' />
      <h1 className='text-2xl text-textSecondary font-semibold text-center'>Social Media Post</h1>
      <ProductBreadcrumbList dividedPosition="bottom" active="monte" list={socialMediaItemList} />
      <div className='py-5'>
          <h2 className='font-bold text-xl text-center'>MONTE</h2>
          <p className='text-xl text-center'>Visual Direction & Execution by Nguyen Trong Lai</p>
          <p className='text-xl text-center'>Worked at Xom Communication</p>
      </div>
      <MonteDetailSection />
    </div>
  );
}
