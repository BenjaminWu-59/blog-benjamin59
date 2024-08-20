'use client'
import PersonalCard from "@/components/pages/PersonalCard";
import PersonalAnimate from "@/components/pages/PersonalAnimate";
import BolgList from "@/components/pages/BlogList";
import SkillList from "@/components/pages/CodeList";
import ProjectList from "@/components/pages/ProjectList";
import FitnessList from "@/components/pages/FitnessList";
import BookList from "@/components/pages/BookList";
import ZoomIn from '@/components/ZoomIn';
import { testProjectList } from "@/config/projects";
import { testSkillList } from "@/config/skills";
import { testDietList, testFitnessActions, testBookList } from "@/config/fitness";

const Home: React.FC = () => {
  const [isProjectVisible, projectsRef] = ZoomIn();
  const [isSkillVisible, skillsRef] = ZoomIn();
  const [isFitnessVisible, fitnessRef] = ZoomIn();


  return (
    <>
      <section className="z-10 w-full px-4 py-[220px] mt-[50px]
                          relative flex flex-wrap-reverse justify-items-center justify-around items-center">
        <PersonalAnimate />
        <PersonalCard />
      </ section>

      <section id="blogs" className="px-4 lg:px-16 xl:px-32 2xl:px-44 py-32">
        <p className="relative inline-block text-2xl font-medium pb-1 px-1 rounded-lg  gredientBlue text-black dark:text-white">
          Here are some of the articles I wrote, including technical articles, essays, etc.
        </p>

        <div className="w-[500px] relative px-5 py-5 flex text-3xl font-medium pb-1 rounded-lg text-black dark:text-white">
          <div className="absolute my-2 bottom-[-5px] left-[-5px] border-b-4 border-l-4 border-blue-500 w-4 h-4" />
          You can click here To see my &nbsp;
          <div className="hover:scale-110 transition-transform duration-900">
            <a href="/blog" className="m-1 border-b-2 border-blue-400">
              📃All Blogs
            </a>
          </div>
          <div className="absolute my-2 top-0 right-[-5px] border-t-4 border-r-4 border-blue-500 w-4 h-4" />
        </div>
        <BolgList />
      </section>

      <section id="skills"
        ref={skillsRef}
        className={`px-4 lg:px-16 xl:px-32 2xl:px-44 py-32
               ${isSkillVisible ? 'animate-zoom-in' : ''}`}>
        <SkillList skill={testSkillList} />
      </section>

      <section id="projects"
        ref={projectsRef}
        className={`px-4 lg:px-16 xl:px-32 2xl:px-44 py-32
                ${isProjectVisible ? 'animate-zoom-in' : ''}`}>
        <ProjectList project={testProjectList} />
      </section>

      <section id="fitness"
        ref={fitnessRef}
        className={`px-4 lg:px-16 xl:px-32 2xl:px-44 py-32 
                ${isFitnessVisible ? 'animate-zoom-in' : ''}`}>
        <FitnessList
          diets={testDietList}
          fitnessActions={testFitnessActions}
        />
      </section>

      <section className="px-4 lg:px-16 xl:px-32 2xl:px-44 py-10">
        <BookList books={testBookList}/>
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

export default Home