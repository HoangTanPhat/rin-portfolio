import WebsiteSection from "@/components/home/WebsiteSection";

export default function WebsitePage() {
  return (
    <div>
      <h2 className="text-xl md:text-2xl text-center text-textSecondary font-semibold py-5">
        Website
      </h2>
      <WebsiteSection noTitle />
    </div>
  );
}
