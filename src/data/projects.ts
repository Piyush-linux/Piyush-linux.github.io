export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Namaskar",
    techs: [ "bash","shell"],
    link: "https://github.com/Piyush-linux/namaskar",
  },
  {
    title: "Astra OS",
    techs: ["Linux", "Nuxt", "Tailwind"],
    link: "https://piyush-linux.github.io/astraos/",
  },
  {
    title: "portfolio v1",
    techs: ["HTML","CSS","JS","Bulma Css"],
    link: "https://piyush98.netlify.app",
    //isComingSoon: true,
  },
];

export default projects;
