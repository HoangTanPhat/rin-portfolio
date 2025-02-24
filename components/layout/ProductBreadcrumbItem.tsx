'use client';

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

export interface ProductBreadcrumbItemProps {
  id: string;
  title: string;
  href?: string;
}

export default function ProductBreadcrumbItem({
  id,
  title = "",
  href = "/",
}: ProductBreadcrumbItemProps) {
  const router = useRouter();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      const currentId = window.location.hash.substring(1);
      if (currentId === id) {
        setActive(true);
      } else {
        setActive(false);
      }

      console.log(currentId, title);
      const element = document.getElementById(currentId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [router]);

  return (
    <Link href={href} passHref title={title} aria-label={title}>
      <button className={`hover:text-textPink transition-colors ${active ? 'text-textPink' : 'text-textPrimary'} justify-center min-h-[50px] relative rounded-0 overflow-hidden text-ellipsis whitespace-nowrap`}>
        <h3 className="text-base uppercase">{title}</h3>
      </button>
    </Link>
  );
}
