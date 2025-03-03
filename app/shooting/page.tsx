import ShootingSection from "@/components/home/ShootingSection";

export default function ShootingPage() {
  return (
    <div>
      <h2 className="text-xl md:text-2xl text-center text-textSecondary font-semibold py-5">
        Shooting
      </h2>
      <ShootingSection noTitle />
    </div>
  );
}
