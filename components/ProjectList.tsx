import { Project } from "@/config/projects";
import Image from "next/image";

interface ProjectListProps {
  project: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ project = [] }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-3 border border-red-500">
        {project.map((item, index) => (
          <div key={index} className="z-10 m-2 px-5 py-8 min-w-200 border border-red-500">
              <Image
                src={`/` + item.img + `.jpg`}
                alt="JS"
                className="dark:invert pr-1"
                width={60}
                height={60}
                priority
              />
          </div>
        ))}
      </div>
    </>
  )
}

export default ProjectList