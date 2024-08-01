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
          <div className="flex flex-col w-3/12 mr-6">
            <div className="mb-5 p-5 text-slate-100 rounded-3xl shadow-custom bg-[#2D3849]">
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
            <div className="z-10 mb-5 p-3 grid grid-cols-3 gap-2 rounded-3xl shadow-custom">
              {diets.map((item, index) => (
                <div key={index}
                  className="z-10 m-2 min-w-200 min-h-300 rounded-3xl shadow-custom-mid-drak
                          flex justify-center items-center cursor-pointer
                          relative group overflow-hidden
            ">
                  <div className="relative w-full h-full">
                    <div className="w-full h-full transition-transform duration-500 hover:scale-125">
                      <Image
                        src={`/diet/${item.img}.png`}
                        alt="Diet"
                        className="object-cover rounded-3xl"
                        fill
                        priority
                      />
                    </div>
                  </div>
                  {/* overlay section */}
                  <div className="absolute left-0 top-0 opacity-0 flex justify-center items-center
                       group-hover:p-5 w-full h-full
                       group-hover:opacity-85 bg-[#2D3849]/80 rounded-3xl
                       group-hover:backdrop-blur-sm duration-500 pointer-events-none">
                    <div className="text-sm font-sans font-medium text-slate-100">
                      <p>
                        Ingredients:{item.ingredients}
                      </p>
                      {item.descriptions.map((descs, index) => (
                        <p key={index}>
                          {descs}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <div className="z-10 m-2 flex justify-center items-center rounded-3xl shadow-custom">
                一些介绍
              </div>
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