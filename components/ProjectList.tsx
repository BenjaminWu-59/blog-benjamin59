import { Project } from "@/config/projects";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { Icons } from "./icons";

interface ProjectListProps {
  project: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ project = [] }) => {
  return (
    <>
      <div className="flex">
        <div className="w-4/12 flex flex-col rounded-3xl">
          <div className="h-28 mb-7 flex items-center justify-center space-x-3 rounded-3xl shadow-custom bg-[#2D3849]">
            <Icons.logo className="h-10 w-10 rounded-3xl" />
            <span className="text-5xl font-zain font-bold text-foreground/80 text-amber-600">
              {siteConfig.name}
            </span>
          </div>
          <div className="flex-grow rounded-3xl shadow-custom">个人项目介绍</div>
        </div>
        <div className="flex-grow ml-5 rounded-3xl grid grid-cols-2 gap-2 shadow-custom">
          {project.map((item, index) => (
            <div key={index}
              className="z-10 m-2 p-5 min-w-300 min-h-250 
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
      </div>
    </>
  )
}

export default ProjectList