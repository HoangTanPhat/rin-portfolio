import ProductBreadcrumbList from "@/components/layout/ProductBreadcrumbList";
import OnTheBodyShootingDetail from "@/components/shooting/on-the-body/OnTheBodyShootingDetail";
import { shootingItemList } from "@/lib/utils/constants";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'On The Body - Shooting | Rin Portfolio',
  description: 'Hello :) Welcome to my portfolio website!'
}

export default function OnTheBodyShootingPage() {
  const onTheBodyShootingConcept: {
    conceptNumber: number;
    title?: string;
  }[] = [
    {
      conceptNumber: 1,
    },
    {
      conceptNumber: 2,
    },
    {
      conceptNumber: 3,
    },
    {
      conceptNumber: 4,
    },
  ];
  return (
    <div className="max-w-5xl m-auto">
      <hr className="border-textPrimary pb-5" />
      <h1 className="text-xl md:text-2xl text-textSecondary font-semibold text-center">
        Shooting
      </h1>
      <ProductBreadcrumbList
        dividedPosition="bottom"
        active="on-the-body"
        list={shootingItemList}
      />
      <div className="py-5">
        <p className="text-md md:text-xl text-center">
          <span className="font-semibold">Agency: </span>XOM COMMUNICATION
        </p>
        <p className="text-md md:text-xl text-center">
          <span className="font-semibold">Creative Director: </span>Ms. Van Anh
        </p>
        <p className="text-md md:text-xl text-center">
          <span className="font-semibold">Art: </span>Ms. Van Anh, Ms. Trinh, <span className='text-textPink whitespace-pre md:whitespace-normal'>Nguyen Trong Lai</span>
        </p>
        <p className="text-md md:text-xl text-center">
          <span className="font-semibold">Design: </span><span className='text-textPink'>Nguyen Trong Lai</span>
        </p>
        <p className="text-md md:text-xl text-center">
          <span className="font-semibold">Account: </span>Mr. Trung
        </p>
        <p className="text-md md:text-xl text-center">
          <span className="font-semibold">Producer: </span>Ms. Le Le
        </p>
        <h3 className="font-bold text-md md:text-xl text-center mt-10">Scope</h3>
        <p className="text-md md:text-xl text-center">
          Work with my creative team to propose ideas for the campaign.
        </p>
        <p className="text-md md:text-xl text-center">Create concepts.</p>
        <p className="text-md md:text-xl text-center">
          Participate in PPM and production.
        </p>
        <p className="text-md md:text-xl text-center">Retouch & Design.</p>
        <p className="text-md md:text-xl text-center">
          Social AWO (from director to designer,..).
        </p>
      </div>
      {onTheBodyShootingConcept.map((item) => {
        return (
          <section key={item.conceptNumber}>
            <p className="text-md md:text-xl text-center py-5">
              <span className="uppercase font-semibold">
                Concept {item.conceptNumber}
              </span>
            </p>
            <OnTheBodyShootingDetail conceptNumber={item.conceptNumber} />
          </section>
        );
      })}
    </div>
  );
}
