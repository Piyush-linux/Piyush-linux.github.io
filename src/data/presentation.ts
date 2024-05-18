type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "piyush.dev.404@gmail.com",
  title: "Hey, I’m Piyush 👋",
  // profile: "/profile.webp",
  description:
    "Namaste, All Code Guru's,  i'm a *Indian Web Developer* with over *1 year* of Web Experience. I am currently working with *NuxtJS and Rust*. Outside of work I mostly *virajman* on my *Linux Workstation* and try to explore the *Github Bazar* for some ineteresting *Spicy Projects* to work on.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/itsstormzz_",
    },
    {
      label: "Bento",
      link: "https://bento.me/piyush404",
    },
    {
      label: "Github",
      link: "https://github.com/Piyush-linux",
    },{
      label: "Mastodon",
      link: "https://github.com/Piyush-linux",
    },
  ],
};

export default presentation;
