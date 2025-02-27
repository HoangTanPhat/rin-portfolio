import ProductBreadcrumbList from "@/components/layout/ProductBreadcrumbList";
import CoopMartShootingDetail from "@/components/shooting/coop-mart/CoopMartShootingDetail";
import { shootingItemList } from "@/lib/utils/constants";

export default function CoopMartShootingPage() {
  const coopMartShootingConcept: {
    conceptNumber: number;
    title: string;
  }[] = [
    {
      conceptNumber: 1,
      title: "Key Visual",
    },
    {
      conceptNumber: 2,
      title: "Social AWO",
    },
    {
      conceptNumber: 3,
      title: "Social AWO",
    },
    {
      conceptNumber: 4,
      title: "Key Visual",
    },
  ];
  return (
    <div className="max-w-5xl m-auto">
      <hr className="border-textPrimary pb-5" />
      <h1 className="text-2xl text-textSecondary font-semibold text-center">
        Shooting
      </h1>
      <ProductBreadcrumbList
        dividedPosition="bottom"
        active="coop-mart"
        list={shootingItemList}
      />
      <div className="py-5">
        <p className="text-xl text-center">
          <span className="font-semibold">Agency: </span>XOM COMMUNICATION
        </p>
        <p className="text-xl text-center">
          <span className="font-semibold">Creative Director: </span>Ms. Van Anh
        </p>
        <p className="text-xl text-center">
          <span className="font-semibold">Art: </span><span className='text-textPink'>Nguyen Trong Lai</span>
        </p>
        <p className="text-xl text-center">
          <span className="font-semibold">Design: </span><span className='text-textPink'>Nguyen Trong Lai</span>
        </p>
        <p className="text-xl text-center">
          <span className="font-semibold">Account: </span>Ms. Phuong Tram
        </p>
        <p className="text-xl text-center">
          <span className="font-semibold">Producer: </span>Ms. Le Le
        </p>
        <h3 className="font-bold text-xl text-center mt-10">Scope</h3>
        <p className="text-xl text-center">
          Work with my creative team to propose ideas for the campaign.
        </p>
        <p className="text-xl text-center">Create concepts.</p>
        <p className="text-xl text-center">
          Participate in PPM and production.
        </p>
        <p className="text-xl text-center">Retouch & Design.</p>
        <p className="text-xl text-center">
          Social AWO (from director to designer,..).
        </p>
      </div>
      {
        coopMartShootingConcept.map((item) => {
            return (
                <section key={item.conceptNumber}>
                    <p className='text-xl text-center py-5'><span className='uppercase font-semibold '>Concept {item.conceptNumber} </span>({item.title})</p>
                    <CoopMartShootingDetail conceptNumber={item.conceptNumber} />
                </section>
            );
        })
      }
    </div>
  );
}
