export interface BlogPost {
  title: string;
  description: string;
  createdAt: string; 
  color: string;
}

export const testArticleData: BlogPost[] = [
  {
    title: 'Hello World',
    description: 'This is our first blog post. Really cool',
    createdAt: "2024-03-04",
    color: "red"
  },
  {
    title: 'Lets see what we can do with TailWind css',
    description: 'Syntax highlighting, line numbers, line highlights, word highlights',
    createdAt: "2024-03-04",
    color: "red"
  },
  {
    title: 'Github Flavoured Markdown CheatSheet',
    description: 'A markdown cheat sheet for GFM',
    createdAt: "2024-03-04",
    color: "red"
  },
  {
    title: 'The Mysterious Case of the Disappearing Props',
    description: 'Join us on a humorous detective journey to solve the mystery of disappearing props in a React application. Learn troubleshooting tips and best practices to prevent your props from vanishing into thin air.',
    createdAt: "2024-03-04",
    color: "red"
  }
];