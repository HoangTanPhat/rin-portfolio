"use client";

import React from "react";
import ProductBreadcrumbItem, {
  ProductBreadcrumbItemProps,
} from "./ProductBreadcrumbItem";

interface ProductBreadcrumbList {
  dividedPosition: "top" | "bottom"
  list: ProductBreadcrumbItemProps[];
}

export default function ProductBreadcrumbList({ list, dividedPosition = 'bottom' }: ProductBreadcrumbList) {
  return (
    <div className='py-5'>
    { dividedPosition === 'top' && <hr className='border-textPrimary pb-2' /> }
    <div className='flex flex-row gap-2 items-center justify-center pb-2'>
      {list.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className='flex flex-row gap-2'>
              <ProductBreadcrumbItem
                id={item.id}
                title={item.title}
                href={item.href}
              />
            </div>
            {index < list.length - 1 && <span>/</span>}
          </React.Fragment>
        );
      })}
    </div>
    { dividedPosition === 'bottom' && <hr className='border-textPrimary' /> }
    </div>
    
  );
}
