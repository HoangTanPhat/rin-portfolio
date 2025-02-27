import BannerSection from "@/components/home/BannerSection";
import BrandingSection from "@/components/home/BrandingSection";
import MagazineSection from "@/components/home/MagazineSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ShootingSection from "@/components/home/ShootingSection";
import SocialMediaSection from "@/components/home/SocialMediaSection";
import WebsiteSection from "@/components/home/WebsiteSection";
import ProductBreadcrumbList from "@/components/layout/ProductBreadcrumbList";

export default function Home() {
  const productsList = [{
    id: "social-media-post",
    title: "Social Media Post",
    href: "#social-media-post",
  },
  {
    id: "shooting",
    title: "Shooting",
    href: "#shooting",
  },
  {
    id: "branding",
    title: "Branding",
    href: "#branding",
  },
  {
    id: "website",
    title: "Website",
    href: "#website",
  },
  {
    id: "magazine",
    title: "Magazine",
    href: "#magazine",
  },
  {
    id: "projects",
    title: "Projects",
    href: "#projects",
  }];

  return (
    <div className='max-w-5xl m-auto'>
      <BannerSection />
      <ProductBreadcrumbList dividedPosition="bottom" list={productsList} />
      <SocialMediaSection />
      <ShootingSection />
      <BrandingSection />
      <WebsiteSection />
      <MagazineSection />
      <ProjectsSection />
    </div>
  );
}
