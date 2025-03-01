import ProductBreadcrumbList from "@/components/layout/ProductBreadcrumbList";
import XomCommunicationWebsiteSection from "@/components/website/xom-communication/XomCommunicationWebsiteSection";
import { websiteItemList } from "@/lib/utils/constants";
import Link from 'next/link';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Xom Communication - Website | Rin Portfolio',
  description: 'Hello :) Welcome to my portfolio website!'
}

export default function XomCommunicationWebsitePage() {
  return (
    <div className="max-w-5xl m-auto">
      <hr className="border-textPrimary pb-5" />
      <h1 className="text-xl md:text-2xl text-textSecondary font-semibold text-center">
        Website
      </h1>
      <ProductBreadcrumbList
        dividedPosition="bottom"
        active="xom-communication"
        list={websiteItemList}
      />
      <div className="py-5">
        <h3 className="font-semibold text-md md:text-xl text-center uppercase pb-5">Scope</h3>
        <p className="text-md md:text-xl text-center">
            Come up with ideas and divide the time to implement them.
        </p>
        <p className="text-md md:text-xl text-center">Image processing.</p>
        <p className="text-md md:text-xl text-center">
        Build layout.
        </p>
        <p className="text-md md:text-xl text-center">Website design.</p>
        <div className='py-5 text-center'>
        <Link href='https://xommedia.com/' passHref target="__blank" rel="noreferrer nofollow" className="text-md md:text-xl text-center underline text-textSecondary">xommedia.com</Link>
        </div>
      </div>
      <XomCommunicationWebsiteSection />
    </div>
  );
}
