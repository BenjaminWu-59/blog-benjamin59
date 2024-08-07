import SkillList from "@/components/CodeSrollList";
import FitnessList from "@/components/FitnessList";
import ProjectList from "@/components/ProjectList";
import ScrollList from "@/components/ScrollList";
import { testArticleData } from "@/config/articles";
import { testProjectList } from "@/config/projects";
import { testSkillList } from "@/config/skills";
import { testDietList, testFitnessActions, testBookList } from "@/config/fitness";

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

      <section id="blogs" className="px-4 lg:px-16 xl:px-32 2xl:px-44 py-32">
        <p className="relative inline-block text-2xl font-medium pb-1 px-1 rounded-lg bg-gradient-to-r from-orange-300 to-orange-300 text-black dark:text-white">
          Here are some of the articles I wrote, including technical articles, essays, etc.
        </p>
        <ScrollList items={testArticleData} />
      </section>

      <section id="skills" className="px-4 lg:px-16 xl:px-32 2xl:px-44 py-32">
        <SkillList skill={testSkillList} />
      </section>

      <section id="projects" className="px-4 lg:px-16 xl:px-32 2xl:px-44 py-28">
        <ProjectList project={testProjectList} />   
      </section>

      <section id="fitness" className="px-4 lg:px-16 xl:px-32 2xl:px-44 py-28">
        <FitnessList 
           diets={testDietList} 
           fitnessActions={testFitnessActions}
           books={testBookList} 
        />
      </section>

      <section className="w-full px-4 lg:px-14 xl:px-28 2xl:px-40 relative z-10 my-36"
        style={{
          opacity: "1",
          transform: "none"
        }}
      >
        <p className="text-2xl md:text-4xl max-w-5xl">
          I am looking for a remote job, so I created this website to showcase some information. If you are interested in me, please feel free to contact me.
        </p>
      </section>
    </>
  );
}
