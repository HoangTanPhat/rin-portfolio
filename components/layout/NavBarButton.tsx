'use client';

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
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
  const router = useTransitionRouter();
  const [active, setActive] = useState<string>('/');

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: 'translate(0, 0)',
        },
        {
          opacity: 0,
          transform: 'translate(-100px, 0)',
        },
      ],
      {
        duration: 400,
        easing: 'ease',
        fill: 'forwards',
        pseudoElement: '::view-transition-old(slide-in-out)',
      }
    );
  
    document.documentElement.animate(
      [
        {
          opacity: 0,
          transform: 'translate(100px, 0)',
        },
        {
          opacity: 1,
          transform: 'translate(0, 0)',
        },
      ],
      {
        duration: 400,
        easing: 'ease',
        fill: 'forwards',
        pseudoElement: '::view-transition-new(slide-in-out)',
      }
    );
  }

  useEffect(() => {
    if (pathname !== '/about') {
      setActive('/');
    } else {
      setActive('/about')
    }
  }, [pathname]);

  return (
    <a href={href} title={title} aria-label={title} onClick={async (e) => {
      e.preventDefault();
      router.push(href, {
        onTransitionReady: slideInOut
      })
    }}>
      <button className={`${active == href ? 'text-textPink' : 'text-textPrimary'} hover:text-textPink transition-colors justify-center min-h-[50px] relative rounded-0 overflow-hidden text-ellipsis whitespace-nowrap`}>
        <h3 className="text-base uppercase">{title}</h3>
      </button>
    </a>
  );
}
