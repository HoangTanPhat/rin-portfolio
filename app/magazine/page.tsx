import MagazineSection from "@/components/home/MagazineSection";

export default function MagazinesPage() {
  return (
    <div>
      <h2 className="text-xl md:text-2xl text-center text-textSecondary font-semibold py-5">
        Magazine
      </h2>
      <MagazineSection noTitle />
    </div>
  );
}
