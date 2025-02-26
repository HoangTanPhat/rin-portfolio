'use client';

import Link from "next/link";
import React, { useEffect, useState } from "react";

export interface ProductBreadcrumbItemProps {
  id: string;
  title: string;
  href?: string;
  currentActive?: string;
}

export default function ProductBreadcrumbItem({
  id,
  title = "",
  href = "/",
  currentActive
}: ProductBreadcrumbItemProps) {
  const [active, setActive] = useState<string>(currentActive || '');

  useEffect(() => {
    if (window.location.hash) {
      const currentId = window.location.hash.substring(1);
      setActive(currentId);
      const element = document.getElementById(currentId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [id]);

  return (
    <Link href={href} passHref title={title} aria-label={title}>
      <button className={`hover:text-textPink transition-colors ${active === id || currentActive === id ? 'text-textPink' : 'text-textPrimary'} justify-center min-h-[50px] relative rounded-0 overflow-hidden text-ellipsis whitespace-nowrap`}>
        <h3 className="text-base uppercase">{title}</h3>
      </button>
    </Link>
  );
}
