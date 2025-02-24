import ProductBreadcrumbList from "./ProductBreadcrumbList";
import Image from "next/image";
import igIcon from "@/lib/images/instagram-icon.svg";
import linkedinIcon from "@/lib/images/linkedin-icon.svg";
import Link from "next/link";

export default function Footer() {
  const productsList = [
    {
      index: 0,
      id: "social-media-post",
      title: "Social Media Post",
      href: "#social-media-post",
    },
    {
      index: 1,
      id: "shooting",
      title: "Shooting",
      href: "#shooting",
    },
    {
      index: 2,
      id: "branding",
      title: "Branding",
      href: "#branding",
    },
    {
      index: 3,
      id: "website",
      title: "Website",
      href: "#website",
    },
    {
      index: 4,
      id: "magazine",
      title: "Magazine",
      href: "#magazine",
    },
    {
      index: 5,
      id: "projects",
      title: "Projects",
      href: "#projects",
    },
  ];

  return (
    <footer className="pt-4 pb-10 max-w-5xl m-auto">
      <ProductBreadcrumbList dividedPosition="top" list={productsList} />
      <div className="relative w-full max-w-sm m-auto mb-10">
        <input
          type="text"
          placeholder="Search..."
          className="w-full text-textSecondary p-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          🔍
        </div>
      </div>
      <div className="flex flex-row gap-4 justify-center">
        <Link
          href="https://www.instagram.com/lainguyentrong"
          passHref
          title="Instagram"
          rel="noopener noreferrer" target="_blank"
          aria-label="Instagram"
        >
          <div className="relative w-9 h-9 flex items-center justify-center">
            <Image src={igIcon} fill alt="Social media icon" />
          </div>
        </Link>
        <Link
          href="https://www.linkedin.com/in/rin-nguyen-ntl"
          passHref
          title="Linkedin"
          rel="noopener noreferrer" target="_blank"
          aria-label="Linkedin"
        >
          <div className="relative w-9 h-9 flex items-center justify-center">
            <Image src={linkedinIcon} fill alt="Social media icon" />
          </div>
        </Link>
      </div>
    </footer>
  );
}
