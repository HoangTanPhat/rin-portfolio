import ProjectsSection from "@/components/home/ProjectsSection";

export default function ProjectsPage() {
  return (
    <div>
      <h2 className="text-xl md:text-2xl text-center text-textSecondary font-semibold py-5">
        Projects
      </h2>
      <ProjectsSection noTitle />
    </div>
  );
}
