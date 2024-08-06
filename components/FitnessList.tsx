import { Diet } from "@/config/fitness";
import Image from "next/image";
import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
            <div className="z-10 mb-5 flex">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="max-w-[500px] mx-20"
              >
                <CarouselContent>
                  {diets.map((item, index) => (
                    <CarouselItem key={index} className="flex justify-center items-center basis-1/2">
                      <div className="w-[250px] h-[350px] flex flex-col justify-center items-center cursor-pointer rounded-3xl
                                   relative group overflow-hidden">
                        <div className="relative w-full h-full flex">
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
                             group-hover:opacity-85 bg-[#2D3849]/75 rounded-3xl
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

                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="flex-grow flex justify-center items-center rounded-3xl shadow-custom">
                diet intoduction
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
