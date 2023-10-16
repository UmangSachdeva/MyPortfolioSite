import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  searchin,
  carrent,
  threejs,
  foundrmeet,
  bootstrap,
  materialUi,
  netlify,
  natours,
  videoplayer,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Netlify",
    icon: netlify,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Materail UI",
    icon: materialUi,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "Foundrmeet",
    icon: foundrmeet,
    iconBg: "#383E56",
    date: "Jun 2022 - Dec 2022",
    points: [
      "Developing a website that is not only visually stunning but also highly responsive, ensuring an exceptional user experience.",
      "Played an active role in code reviews, fostering a culture of continuous improvement. Provided valuable insights and constructive feedback to fellow developers",
      "Led the development of end-to-end solutions as a full-stack web developer, effectively bridging the gap between front-end and back-end development teams.",
      "Focused on continually improving the user experience, identifying pain points, and proposing and implementing optimizations to ensure an intuitive and seamless interaction for website visitors.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Search In Solutions",
    icon: searchin,
    iconBg: "#c6daf9",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Demonstrated versatility by actively contributing to a range of projects at Search-In IT Solutions as a web developer. Successfully executed tasks across various domains, consistently meeting deadlines and project requirements.",
      "Played a pivotal role in enhancing project functionality by implementing advanced features such as email tracking and user authentication. Proficiently integrated various APIs, enriching the applications with external capabilities.",
      "Proactively took charge of optimizing site performance, ensuring faster loading times and enhanced user experiences. Employed best practices and fine-tuned key components to achieve optimal efficiency.",
      "Acted as a collaborative problem solver within the development team, offering innovative solutions to diverse challenges. Facilitated knowledge exchange and collaborated effectively with fellow developers, contributing to the overall success of projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "We found the Umang, to be self-starter who is motivated, duty bound and hard-working who not only worked sincerely on given assignments but also delivered excellent performance in full-stack development.",
    name: "Rahul Nain",
    designation: "CEO",
    company: "Foundrmeet",
    image:
      "https://media.licdn.com/dms/image/D4D03AQFVcau1Nozltg/profile-displayphoto-shrink_400_400/0/1665909120823?e=1698883200&v=beta&t=H09Loz24hzRnVoazUb4HoOLlcoEs6KKiWTnnhrxwdpQ",
  },
  {
    testimonial:
      "Umang displayed talents in web development that helped our team move forward and learn. His skills and work ethics are sound and he has continuously learned how to ideate, build and deploy software while in our group.",
    name: "Aniket Chopade",
    designation: "CEO",
    company: "Search-In IT Solutions",
    image:
      "https://media.licdn.com/dms/image/D4D03AQFhtENlIdHkGw/profile-displayphoto-shrink_400_400/0/1673959036901?e=1698883200&v=beta&t=Y8ZD5Ghw84n0z11squ6a4oW33o5PQsRh7Do9OmGg1jQ",
  },
];

const projects = [
  {
    name: "Car Rentals",
    description:
      "Introducing a dynamic full-stack car rental platform with a unique twist. Users can explore a wide range of available vehicles, engage in real-time negotiations with sellers via an integrated chat system, and enjoy secure transactions. Experience seamless car renting with a touch of flexibility and transparency.",
    tags: [
      {
        name: "socket.io",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/UmangSachdeva/-Car_Selling_Site",
    live: "https://car-rentals-ipvp.onrender.com/",
  },
  {
    name: "Natours",
    description:
      "Welcome to our premier tour booking platform, where your travel dreams come to life with ease. Explore a world of captivating destinations and seamless booking experiences. Our integrated payment gateway ensures secure transactions, while user-friendly credentials allow for hassle-free logins. Join us on a journey to discover and book unforgettable adventures.",
    tags: [
      {
        name: "pug",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "pug",
        color: "pink-text-gradient",
      },
    ],
    image: natours,
    source_code_link: "https://github.com/UmangSachdeva/Natours",
    live: "https://natours-3ov1.onrender.com/",
  },
  {
    name: "Video Player",
    description:
      "An all-encompassing video player that not only enables seamless video playback but also allows users to engage with their favorite content through a 'like' button. Additionally, our platform offers a personalized touch with user login credentials, enhancing your video-watching experience.",
    tags: [
      {
        name: "json-web-tokens",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: videoplayer,
    source_code_link: "https://github.com/UmangSachdeva/VideoPlayerMERN",
    live: "https://video-player-mern.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
