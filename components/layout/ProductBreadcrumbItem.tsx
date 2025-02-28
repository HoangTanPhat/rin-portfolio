'use client';

import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

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
  const pathName = usePathname();

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

  useEffect(() => {
      if (pathName !== '/') {
        const mainCategory = pathName.substring(1).split('/')[0];
        if (mainCategory) {
          setActive(mainCategory);
        }
      } else if (!window.location.hash) {
        setActive('');
      }
    }, [pathName]);

  useEffect(() => {
    const updateHash = () => {
      if (window.location.pathname === '/') {
        const hash = window.location.hash.substring(1);
        console.log('Hash: ', hash);
        setActive(hash || '');
      }

      if (window.location.pathname === '/' && !window.location.hash) {
        setActive('');
      }
    };

    window.addEventListener('hashchange', updateHash);

    return () => {
      window.removeEventListener('hashchange', updateHash);
    };
  }, []);

  return (
    <a href={href} title={title} aria-label={title}>
      <button className={`hover:text-textPink transition-colors ${active === id || currentActive === id ? 'text-textPink' : 'text-textPrimary'} justify-center min-h-[50px] relative rounded-0 overflow-hidden text-ellipsis whitespace-nowrap`}>
        <h3 className="text-base uppercase">{title}</h3>
      </button>
    </a>
  );
}
