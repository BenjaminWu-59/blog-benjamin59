import { Project } from "@/config/projects";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { Icons } from "./icons";
import Link from "next/link";

interface ProjectListProps {
  project: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ project = [] }) => {
  return (
    <>
      <div className="flex">
        <div className="w-4/12 flex flex-col rounded-3xl">
          <div className="p-5 mb-7 flex flex-col items-center justify-center space-x-3 rounded-3xl shadow-custom bg-[#2D3849]">
            <div className="flex items-center justify-center">
              <Icons.logo className="mr-5 h-14 w-14 rounded-3xl" />
              <span className="text-5xl font-zain font-bold text-amber-600">
                {siteConfig.name}
              </span>
            </div>
            <p className="my-3 font-mono font-semibold text-slate-100">A full stack developer using Javascript</p>
          </div>
          <div className="p-5 flex-grow rounded-3xl shadow-custom">
            <p className="mb-7">
              This module mainly includes some projects I have done, both company and personal. The technology stack is mainly concentrated on react, ts, nestjs.
              If you are interested, you can click to enter the corresponding homepage to view it.
            </p>
            <p>
              Projects I’ve accomplished or excited about:
            </p>
            <ul className="py-2 flex">
              <li className="m-2 px-2 flex justify-center items-center rounded-full bg-[#2D3849]">
                <Link
                  href="https://benjaminwu-59.github.io/Klan-UI/#/"
                  className="px-2 text-slate-100 accentDarkBg"
                >
                  Klan-UI
                </Link>
                <Image
                  src="/link.svg"
                  alt="link"
                  width={10}
                  height={10}
                  priority
                />
              </li>
              <li className="m-2 px-2 flex justify-center items-center rounded-full bg-[#2D3849]">
                <Link
                  href="https://benjaminwu-59.github.io/Canvas-Paint/"
                  className="px-2 text-slate-100 accentDarkBg"
                >
                  Canvas-Paint
                </Link>
                <Image
                  src="/link.svg"
                  alt="link"
                  width={10}
                  height={10}
                  priority
                />
              </li>
            </ul>
          </div>
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
                  fill
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