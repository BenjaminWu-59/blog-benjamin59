import { Skill } from "@/config/skills";
import Image from "next/image";


interface SkillListProps {
  skill: Skill[];
}

const SkillList: React.FC<SkillListProps> = ({ skill = [] }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {skill.map((item, index) => (
          <div key={index} className="m-2 px-5 py-10 flex flex-col justify-center items-center rounded-3xl cursor-pointer border border-border">
            <div className="p-3">
              <Image
                src="/js.svg"
                alt="JS"
                className="dark:invert pr-1"
                width={60}
                height={60}
                priority
              />
            </div>
            <div className="font-semibold">{item.skill}</div>
            <div>{item.duaration}</div>
          </div>
        ))}
      </div>

    </>
  );
}

export default SkillList