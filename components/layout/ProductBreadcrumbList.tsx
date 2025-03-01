"use client";

import React from "react";
import ProductBreadcrumbItem, {
  ProductBreadcrumbItemProps,
} from "./ProductBreadcrumbItem";

interface ProductBreadcrumbList {
  active?: string;
  dividedPosition: "top" | "bottom";
  list: ProductBreadcrumbItemProps[];
  isFooter?: boolean;
}

export default function ProductBreadcrumbList({
  active,
  list,
  dividedPosition = "bottom",
  isFooter = false,
}: ProductBreadcrumbList) {
  if (isFooter) {
    return (
      <div className="pt-5 pb-10 md:pb-5">
        <hr className="border-textPrimary md:pb-2" />
        <div className="flex flex-col md:flex-row md:gap-2 items-center justify-center pb-2 flex-wrap">
          {list.map((item, index) => {
            return (
              <React.Fragment key={'footer-' + index}>
                <div className="flex flex-row gap-2 items-center justify-center py-3 border-b border-black md:border-0 md:py-0 w-full md:w-auto">
                  <ProductBreadcrumbItem
                    id={item.id}
                    title={item.title}
                    href={item.href}
                    currentActive={active}
                  />
                  {index < list.length - 1 && <span className='md:block hidden'>/</span>}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="py-5">
      {dividedPosition === "top" && (
        <hr className="border-textPrimary pb-5 md:pb-2" />
      )}
      <div className="flex flex-row gap-2 items-center justify-center pb-2 flex-wrap">
        {list.map((item, index) => {
          return (
            <React.Fragment key={dividedPosition + index}>
              <div className="flex flex-row gap-2 items-center justify-center">
                <ProductBreadcrumbItem
                  id={item.id}
                  title={item.title}
                  href={item.href}
                  currentActive={active}
                />
                {index < list.length - 1 && <span>/</span>}
              </div>
            </React.Fragment>
          );
        })}
      </div>
      {dividedPosition === "bottom" && <hr className="border-textPrimary" />}
    </div>
  );
}
