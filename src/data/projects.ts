export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Meu ( Universal Convertor )",
    techs: [ "Vitepress","Vue", "vite"],
    link: "https://github.com/MaeWolff/dictionary-app",
  },
  {
    title: "PiyuOS",
    techs: ["Linux", "Wayland"],
    link: "https://www.linablidi.fr/",
  },
  {
    title: "Baiju",
    techs: ["HTML","CSS","JS","Bulma Css"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
