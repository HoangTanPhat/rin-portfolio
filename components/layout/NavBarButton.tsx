import Link from "next/link";
import React from "react";

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
  return (
    <Link href={href} passHref title={title} aria-label={title} scroll={false}>
      <button className="hover:text-textPink transition-colors text-textPrimary justify-center min-h-[50px] relative rounded-0 overflow-hidden text-ellipsis whitespace-nowrap">
        <h3 className="text-base uppercase">{title}</h3>
      </button>
    </Link>
  );
}
