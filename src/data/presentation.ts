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
    "Namaste, All Code Guru's,  i'm an *Indian Web Developer*. Currently Working with *NuxtJS and Rust*. Outside of work I mostly *Viraj-maan* on my *Linux Workstation* and try to explore the *Github Bazar* for some ineteresting *Spicy Projects* to work on.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/piyush_linux",
    },
    // {
    //   label: "Bento",
    //   link: "https://bento.me/piyush-linux",
    // },
    {
      label: "Github",
      link: "https://github.com/Piyush-linux",
    },{
      label: "Mastodon",
      link: "https://mastodon.social/@piyush_linux",
      
    },{
      label: "Dev",
      link: "https://dev.to/piyush-linux",
    },
  ],
};

export default presentation;
