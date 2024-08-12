import { Project } from "../../config/projects";
import { siteConfig } from "../../config/site"
import Image from "next/image";
import Icons from "@/components/SiteIcons";
import Link from "next/link";
import React from "react";

interface ProjectListProps {
  project: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ project = [] }) => {

  return (
    <>
      <div className="flex">
        <div className="w-4/12 flex flex-col rounded-3xl">
          <div className="p-5 mb-7 flex flex-col items-center justify-center space-x-3 rounded-3xl shadow-normal gredientMain">
            <div className="flex items-center justify-center">
              <Icons.logo className="mr-5 h-20 w-20 rounded-3xl" />
              <span className="text-5xl font-zain font-bold text-amber-600">
                {siteConfig.name}
              </span>
            </div>
            <p className="my-3 font-mono font-semibold text-slate-100">A full stack developer using Javascript</p>
          </div>
          <div className="p-5 flex-grow rounded-3xl shadow-normal">
            <p className="mb-7">
              This module mainly includes some projects I have done, both company and personal. The technology stack is mainly concentrated on react, ts, nestjs.
              If you are interested, you can click to enter the corresponding homepage to view it.
            </p>
            <p>
              Projects I’ve accomplished or excited about:
            </p>
            <ul className="py-2 flex">
              <li className="m-2 px-2 flex justify-center items-center rounded-full gredientMain">
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
              <li className="m-2 px-2 flex justify-center items-center rounded-full gredientMain">
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

        <div className="flex-grow ml-5 p-5 rounded-3xl grid grid-cols-2 gap-2 shadow-normal">
          {project.map((item, index) => (
            <div key={index}
              className="z-10 m-2 min-w-300 min-h-250 rounded-3xl shadow-
                        flex justify-center items-center cursor-pointer 
                        relative group overflow-hidden
          ">
              <div className="relative w-full h-full">
                <div className="w-full h-full transition-transform duration-500 hover:scale-125">
                  <Image
                    src={`/${item.img}.jpg`}
                    alt="Project"
                    className="object-cover rounded-3xl"
                    fill
                    priority
                  />
                </div>
              </div>
              {/* overlay section */}
              <div className="absolute left-0 top-0 opacity-0 flex justify-center items-center
                 group-hover:p-5 w-full h-full
                 group-hover:opacity-85 bg-[#2D3849]/60 rounded-3xl
                 group-hover:backdrop-blur-sm duration-500 pointer-events-none">
                <p className="font-sans font-medium text-slate-100">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProjectList