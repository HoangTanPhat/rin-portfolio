import BrandingSection from "@/components/home/BrandingSection";

export default function BrandingPage() {
  return (
    <div>
      <h2 className="text-xl md:text-2xl text-center text-textSecondary font-semibold py-5">
        Branding
      </h2>
      <BrandingSection noTitle />
    </div>
  );
}
