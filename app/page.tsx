import ScrollList from "@/components/ScrollList";
import { testArticleData } from "@/config/articles";

export default function Home() {
  return (
    <>
      <section className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-12 md:mt-40 md:mb-12 py-20 flex flex-wrap-reverse md:flex-nowrap justify-items-center justify-around items-center gap-16">
        <div className="flex items-center justify-center">
          <div className="z-10 p-10 rounded-3xl gray-gradient">
            <p className="text-xl font-bold">My name is:</p>
            <p className="p-5 text-3xl font-extrabold">Benjamin59</p>
            <hr className="pt-5 border-t-3" />
            <p className="w-80 text-xl font-bold">I'm a:</p>
            <div className="my-2 flex flex-col items-end">
              <p className="text-xl py-0.5">Full Stack Developer</p>
              <p className="text-xl py-0.5">Reactjs Developer</p>
              <p className="text-xl py-0.5">Nestjs Developer</p>
              <p className="text-xl py-0.5">Fitness fan</p>
              <p className="text-xl py-0.5">LOL fan</p>
            </div>
          </div>
        </div>
      </ section>

      <section className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 py-20 md:py-48">
        <p className="relative inline-block text-2xl font-medium pb-1 px-1 rounded-lg bg-gradient-to-r from-orange-300 to-orange-300 text-black dark:text-white">
          Here are some of the articles I wrote, including technical articles, essays, etc.
        </p>
        <ScrollList items={testArticleData} />
      </section>
    </>
  );
}
