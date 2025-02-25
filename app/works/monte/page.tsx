import ProductBreadcrumbList from "@/components/layout/ProductBreadcrumbList";
import MonteDetailSection from "@/components/social-media-post/monte/MonteDetailSection";

export default function MontePage() {
  const productsList = [
  {
    id: "monte",
    title: "Monte",
    href: "/works/monte",
  },
  {
    id: "on-the-body",
    title: "On The Body",
    href: "/works/on-the-body",
  },
  {
    id: "tiger-balm",
    title: "Tiger Balm",
    href: "/works/tiger-balm",
  },
  {
    id: "physiogel",
    title: "Physiogel",
    href: "/works/physiogel",
  },
  {
    id: "pulse-innovates",
    title: "Pulse Innovates",
    href: "/works/pulse-innovates",
  }];

  return (
    <main className='max-w-5xl m-auto'>
      <hr className='border-textPrimary pb-5' />
      <h1 className='text-2xl text-textSecondary font-semibold text-center'>Social Media Post</h1>
      <ProductBreadcrumbList dividedPosition="bottom" list={productsList} />
      <div className='py-5'>
          <h2 className='font-bold text-xl text-center'>MONTE</h2>
          <p className='text-xl text-center'>Visual Direction & Execution by Nguyen Trong Lai</p>
          <p className='text-xl text-center'>Worked at Xom Communication</p>
      </div>
      <MonteDetailSection />
    </main>
  );
}
