export interface Skill {
  icon: string;
  skill: string;
  duaration: string;
  description: string
}

export const testSkillList: Skill[] = [
  {
    icon: "js",
    skill: "JavaScript",
    duaration: "+6 years",
    description: "This was the first programming language I used, starting in college. Although JS is a loosely typed language, it is very enjoyable to write."
  },
  {
    icon: "ts",
    skill: "TypeScript",
    duaration: "+3 years",
    description: "TS is great for team use. The type constraints make JS coding more like traditional languages such as Java, PHP, and Swift, eliminating maintenance worries."
  },
  {
    icon: "nodejs",
    skill: "Node.js",
    duaration: "+4 years",
    description: "Node.js is simple to use, and the abundance of packages on npm makes it incredibly convenient for projects. The invention of Node.js was a brilliant idea."
  },
  {
    icon: "react",
    skill: "React",
    duaration: "+3 years",
    description: "Using functions to control code and create components, especially with TS, is incredibly powerful. This is currently my main front-end language."
  },
  {
    icon: "vue",
    skill: "Vue.js",
    duaration: "+3 years",
    description: "I used Vue when I first started. It's great for beginners because the author has set all the standards, but updates can be painful, like transitioning from Vue2 to Vue3."
  },
  {
    icon: "nestjs",
    skill: "Nestjs",
    duaration: "+2 years",
    description: "Seamlessly transitioned from Express, it's great for developing large projects. It can be considered an upgraded version of Express!"
  },
  {
    icon: "nextjs",
    skill: "Nextjs",
    duaration: "+1 years",
    description: "Currently the most popular full-stack framework, and this website is built with Next.js!"
  },
  {
    icon: "tailwindcss",
    skill: "TailWind CSS",
    duaration: "+2 years",
    description: "At first, I thought it was redundant, but after using it for over an hour, I couldn't do without it!"
  },
  {
    icon: "github",
    skill: "GitHub",
    duaration: "+4 years",
    description: "Although I registered a long time ago and have published many repositories, unfortunately, I haven't uploaded much. I often just look at others' code."
  },
  {
    icon: "mysql",
    skill: "MySQL",
    duaration: "+4 years",
    description: "This was the main database at my previous company. It's probably the simplest and easiest SQL language to learn."
  },
  {
    icon: "postgresql",
    skill: "PostgreSQL",
    duaration: "+1 years",
    description: "Very convenient and easy to use with Nest."
  },
  {
    icon: "debian",
    skill: "Linux",
    duaration: "+2 years",
    description: "My favorite and most frequently used Linux server. Its size makes it ideal for small websites like mine!"
  }
]
