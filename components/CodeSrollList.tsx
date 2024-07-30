import { Skill } from "@/config/skills";
import Image from "next/image";

interface SkillListProps {
  skill: Skill[];
}

const SkillList: React.FC<SkillListProps> = ({ skill = [] }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-3">
        {skill.map((item, index) => (
          <div key={index} className="z-10 m-2 px-5 py-8 min-w-200
          flex flex-col justify-center items-center 
          rounded-3xl cursor-pointer border border-border 
          relative group overflow-hidden
          hover:scale-105 transform transition-transform duration-500
          ">
            <div className="p-3">
              <Image
                src={`/` + item.icon + `.svg`}
                alt="JS"
                className="dark:invert pr-1"
                width={60}
                height={60}
                priority
              />
            </div>
            <div className="py-4 text-2xl font-semibold">
              {item.skill}
            </div>
            <div className="font-medium text-yellow-600">
              {item.duaration}
            </div>
            {/* overlay section */}
            <div className="absolute left-0 top-[-50%] opacity-0 flex justify-center items-center
                 group-hover:top-[0] p-5 w-full h-full
                 group-hover:opacity-100 bg-black/60 rounded-3xl
                 group-hover:backdrop-blur-sm duration-500">
              <p className="font-sans font-medium text-lg text-slate-100">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </>
  );
}

export default SkillList