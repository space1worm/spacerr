import { createElement } from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const experiencesData = [
  {
    title: "Internship at CERN",
    location: "Georgia, Tbilisi",
    description:
      "My journey as a programmer started at CERN, where I learned basics of C++, HTML, CSS, JS, PhP, Node.js and Front-end Development",
    icon: createElement(LuGraduationCap),
    date: "2018",
    link: "https://home.cern/",
  },
  {
    title: "Front-End Developer at CERN",
    location: "Georgia, Tbilisi",
    description:
      "I worked as a Fullstack Developer developer for almost 5 years, where I worked on 12 different projects, I also created core library which is being used in most of the applications. I also upskilled to the full stack and mentored newcomers. My stack included React, Typescript, Three.js, React-Three-Fiber, TailwindCss, Redux-toolkit",
    icon: createElement(CgWorkAlt),
    date: "2019 - present",
    link: "https://tracer-core.web.cern.ch/",
  },
  {
    title: "Devops Internship at Europe-Bet",
    location: "Georgia, Tbilisi",
    description:
      "The reason I decided to start an internship in DevOps was that I had always been interested in how things worked behind the scenes. During my time here, I have learned a lot about systems connections and cloud technology.",
    icon: createElement(LuGraduationCap),
    date: "2022 - 2022",
    link: "https://www.europebet.com/",
  },
  {
    title: "Full-Stack Developer at Basic-Fit",
    location: "Georgia, Tbilisi",
    description:
      "I worked as a fullstack developer at basic-fit around 1 year. My stack included Javascript, jQuery, Scss, Node.js, SFCC",
    icon: createElement(CgWorkAlt),
    date: "2022 - 2023",
    link: "https://www.basic-fit.com/nl-nl/homepage",
  },
  {
    title: "Frontend Developer at Lookers",
    location: "Georgia, Tbilisi",
    description:
      "I worked as a frontend developer at Lookers around 2 month. My stack included Javascript, Typescript, React, Node.js, Storybook, Jest.",
    icon: createElement(CgWorkAlt),
    date: "2023 - 2023",
    link: "https://www.lookers.co.uk/",
  },
  {
    title: "Full-Stack Developer at SohoHouse",
    location: "Georgia, Tbilisi",
    description:
      "Currently I work at SohoHouse. My stack includes Vue, Nuxt, Typescript, Scss, Jest",
    icon: createElement(CgWorkAlt),
    date: "2023 - present",
    link: "https://sohohouse.com/",
  },
  {
    title: "Mentoring at EPAM and CERN",
    location: "Georgia, Tbilisi",
    description:
      "Currently, I guide newcomers and train them in the fundamentals of HTML, CSS, JavaScript, TypeScript, and React",
    icon: createElement(CgWorkAlt),
    date: "2023 - present",
    link: undefined,
  },
] as const;
