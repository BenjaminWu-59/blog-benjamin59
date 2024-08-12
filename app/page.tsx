'use client'
import PersonalCard from "@/components/PersonalInfo";
import SkillList from "@/components/CodeSrollList";
import FitnessList from "@/components/FitnessList";
import ProjectList from "@/components/ProjectList";
import ScrollList from "@/components/ScrollList";
import PersonalAnimate from "@/components/PersonalAnimate";
import ZoomIn from '@/components/ZoomIn';
import { testArticleData } from "@/config/articles";
import { testProjectList } from "@/config/projects";
import { testSkillList } from "@/config/skills";
import { testDietList, testFitnessActions, testBookList } from "@/config/fitness";



const Home: React.FC = () => {
  const [isProjectVisible, projectsRef] = ZoomIn();
  const [isSkillVisible, skillsRef] = ZoomIn();
  const [isFitnessVisible, fitnessRef] = ZoomIn();


  return (
    <>
      <section className="z-10 w-full px-4 py-[200px] my-28 relative flex flex-wrap-reverse justify-items-center justify-around items-center">
        <PersonalAnimate />
        <PersonalCard />
      </ section>

      <section id="blogs" className="px-4 lg:px-16 xl:px-32 2xl:px-44 py-32">
        <p className="relative inline-block text-2xl font-medium pb-1 px-1 rounded-lg bg-gradient-to-r from-orange-300 to-orange-300 text-black dark:text-white">
          Here are some of the articles I wrote, including technical articles, essays, etc.
        </p>
        <ScrollList items={testArticleData} />
      </section>

      <section id="skills" 
               ref={skillsRef} 
               className={`px-4 lg:px-16 xl:px-32 2xl:px-44 py-44
               ${isSkillVisible ? 'zoom-in' : ''}`}>
        <SkillList skill={testSkillList} />
      </section>

      <section id="projects" 
               ref={projectsRef} 
               className={`px-4 lg:px-16 xl:px-32 2xl:px-44 py-44 
                ${isProjectVisible ? 'zoom-in' : ''}`}>
        <ProjectList project={testProjectList} />
      </section>

      <section id="fitness" 
               ref={fitnessRef} 
               className={`px-4 lg:px-16 xl:px-32 2xl:px-44 py-28 
                ${isFitnessVisible ? 'zoom-in' : ''}`}>
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

export default Home