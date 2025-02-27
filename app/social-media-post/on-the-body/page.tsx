import ProductBreadcrumbList from "@/components/layout/ProductBreadcrumbList";
import OnTheBodyDetailSection from "@/components/social-media-post/on-the-body/OnTheBodyDetailSection";
import { socialMediaItemList } from "@/lib/utils/constants";

export default function OnTheBodyPage() {
  return (
    <div className='max-w-5xl m-auto'>
      <hr className='border-textPrimary pb-5' />
      <h1 className='text-2xl text-textSecondary font-semibold text-center'>Social Media Post</h1>
      <ProductBreadcrumbList dividedPosition="bottom" active="on-the-body" list={socialMediaItemList} />
      <div className='py-5'>
          <h2 className='font-bold text-xl text-center'>ON THE BODY - LG</h2>
          <p className='text-xl text-center'>Visual Direction & Execution by Nguyen Trong Lai</p>
          <p className='text-xl text-center'>Worked at Xom Communication</p>
      </div>
      <OnTheBodyDetailSection />
    </div>
  );
}
