'use client';

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface NavBarButtonProps {
  title: string;
  href?: string;
  icon?: string;
  activeIcon?: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

export default function NavBarButton({
  title = "",
  href = "/",
}: NavBarButtonProps) {
  const pathname = usePathname();
  const [active, setActive] = useState<string>('/');

  useEffect(() => {
    if (pathname !== '/about') {
      setActive('/');
    } else {
      setActive('/about')
    }
  }, [pathname]);

  return (
    <Link href={href} passHref title={title} aria-label={title} scroll={false}>
      <button className={`${active == href ? 'text-textPink' : 'text-textPrimary'} hover:text-textPink transition-colors justify-center min-h-[50px] relative rounded-0 overflow-hidden text-ellipsis whitespace-nowrap`}>
        <h3 className="text-base uppercase">{title}</h3>
      </button>
    </Link>
  );
}
