import { Diet, FitnessAction, Book } from "@/config/fitness";
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
  fitnessActions: FitnessAction[];
  books: Book[];
}


const FitnessList: React.FC<FitnessListProps> = ({ diets = [], fitnessActions = [], books = [] }) => {
  return (
    <>
      <div>
        <div className="flex">
          {/* 饮食和运动 */}
          <div className="flex flex-col w-full">
            {/* 饮食 */}
            <div className="z-10 mb-5 py-5 pl-5 pr-10 flex rounded-3xl shadow-normal">
              <div className="w-[35%]  p-5 text-gray-50 flex flex-col justify-center items-center rounded-3xl gredientMain">
                <p className="whitespace-nowrap text-orange-400 text-4xl mb-2 font-bold">
                  Daily Diet
                </p>
                <p className="text-gray-50">
                  This is the diet I usually eat, but it is not so strict. I often eat high-fat and high-salt foods with friends, about once a week.
                </p>
              </div>
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-[65%] flex-grow mx-20"
              >
                <CarouselContent>
                  {diets.map((item, index) => (
                    <CarouselItem key={index} className="flex justify-center items-center basis-1/3">
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
            </div>

            {/* 运动 */}
            <div className="flex-grow p-5 flex justify-center rounded-3xl shadow-normal">
              {fitnessActions.map((item, index) => (
                <div key={index} className="w-[200px] h-[300px] p-5
                                 flex justify-center items-center 
                                 cursor-pointer rounded-3xl
                                 relative group overflow-hidden">
                  <div className="relative w-full h-full flex">
                    <div className="w-full h-full transition-transform duration-500 hover:scale-125">
                      <Image
                        src={`/fitness/${item.img}.gif`}
                        alt="Diet"
                        className="object-cover rounded-3xl"
                        fill
                        priority
                        unoptimized
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
                        Ingredients:{item.descriptions}
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
            </div>
          </div>
        </div>
      </div >


      {/* 书籍或网站推荐 */}
      < div className="my-10 grid grid-cols-4 gap-2">
        {books.map((item, index) => (
          <a
            key={index}
            target="_blank"
            rel="noreferrer"
            className="book-container p-10 mr-5 mb-5 group relative block overflow-hidden rounded-xl bg-slate-50 shadow-md transition-all duration-500 hover:bg-[#063142]"
          >
            <div className="book">
              <img src={item.img} />
            </div>
          </a>
        ))}
      </div >
    </>
  )
}

export default FitnessList

