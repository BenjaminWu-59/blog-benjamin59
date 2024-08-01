import { Diet } from "@/config/fitness";
import Image from "next/image";

interface FitnessListProps {
  diets: Diet[];
}


const FitnessList: React.FC<FitnessListProps> = ({ diets = [] }) => {
  return (
    <>
      <div>
        <div className="flex">
          {/* 简介和其他 */}
          <div className="flex flex-col w-4/12 mr-6">
            <div className="mb-10 p-5 text-slate-100 rounded-3xl shadow-custom bg-[#2D3849]">
              <p className="p-2">This area mainly talks about my daily exercise</p>
              <p className="p-2">I think a healthy body is mainly divided into 3 parts: diet, exercise, and other (sleep, mood, etc.)</p>
              <p className="p-2">Diet is the most important thing, fitness is a gradual process, and good sleep and mood mainly depend on self-regulation</p>
            </div>

            {/* 其他 */}
            <div className="p-5 flex-grow rounded-3xl shadow-custom">
              others: Work and rest and emotion
            </div>
          </div>

          {/* 饮食和运动 */}
          <div className="flex-grow flex flex-col">
            {/* 饮食 */}
            <div className="mb-5 p-5 rounded-3xl shadow-custom">
              diet
            </div>

            {/* 运动 */}
            <div className="flex-grow p-5 rounded-3xl shadow-custom">
              sports
            </div>
          </div>
        </div>


        {/* 书籍或网站推荐 */}
        <div className="my-10 p-5 rounded-3xl shadow-custom">
          书籍或网站推荐
        </div>
      </div>
    </>
  )
}

export default FitnessList