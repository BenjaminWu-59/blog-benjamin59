export interface BlogPost {
  title: string;
  description: string;
  createdAt: string;
  backgroundColor: string;
  background: string;
}

export const testArticleData: BlogPost[] = [
  {
    title: 'Hello World',
    description: 'This is our first blog post. Really cool',
    createdAt: "2024-03-04",
    backgroundColor: "rgb(249,249,249)",
    background: "linear-gradient(120deg, rgba(249,249,249,1) 0%, rgba(243,242,244,1) 45%, rgba(239,234,241,1) 72%, rgba(235,227,238,1) 100%)"
  },
  {
    title: 'Lets see what we can do with TailWind css',
    description: 'Syntax highlighting, line numbers, line highlights, word highlights',
    createdAt: "2024-03-04",
    backgroundColor: "rgb(249,249,249)",
    background: "linear-gradient(120deg, rgba(249,249,249,1) 0%, rgba(243,242,244,1) 45%, rgba(239,234,241,1) 72%, rgba(235,227,238,1) 100%)"
  },
  {
    title: 'Github Flavoured Markdown CheatSheet',
    description: 'A markdown cheat sheet for GFM',
    createdAt: "2024-03-04",
    backgroundColor: "rgb(249,249,249)",
    background: "linear-gradient(120deg, rgba(249,249,249,1) 0%, rgba(243,242,244,1) 45%, rgba(239,234,241,1) 72%, rgba(235,227,238,1) 100%)"
  },
  {
    title: 'The Mysterious Case of the Disappearing Props',
    description: 'Join us on a humorous detective journey to solve the mystery of disappearing props in a React application. Learn troubleshooting tips and best practices to prevent your props from vanishing into thin air.',
    createdAt: "2024-03-04",
    backgroundColor: "rgb(249,249,249)",
    background: "linear-gradient(120deg, rgba(249,249,249,1) 0%, rgba(243,242,244,1) 45%, rgba(239,234,241,1) 72%, rgba(235,227,238,1) 100%)"
  }
];