import { Project } from "@/config/projects";
import Image from "next/image";

interface ProjectListProps {
  project: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ project = [] }) => {
  return (
    <>
      <div className="rounded-3xl grid grid-cols-3 gap-3">
        {project.map((item, index) => (
          <div key={index} 
               className="z-10 m-2 p-5 min-w-300 min-h-300 
                          flex justify-center items-center cursor-pointer

          ">
            <div className="relative w-full h-full overflow-hidden rounded-lg shadow-custom">
              <Image
                src={`/${item.img}.jpg`}
                alt="JS"
                className="object-cover w-full h-full"
                layout="fill"
                priority
              />
            </div>
          </div>
        ))}
      </div>

    </>
  )
}

export default ProjectList