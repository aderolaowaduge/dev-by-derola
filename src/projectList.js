const projects = [
  {
    id: 1,
    title: "Photography Portfolio",
    titleLink: "https://aderolaowaduge.github.io/pic-perf-portfolio/",
    description: [
      `A modern, responsive photography portfolio website built with Vite, React, and Tailwind CSS.
    This project showcases my photography work through a clean, elegant interface designed to highlight images
    with interactive galleries and smooth animations.`,

      `Features include a responsive gallery layout, parallax scrolling effects, and hover overlays
    to create an engaging user experience across all devices. This project was created to combine my passion
    for photography with frontend development skills.`,
    ],
    mediaType: "image",
    mediaSrc: "/assets/pic-perf-portfolio-2.png",
    mediaAlt: "Photography Portfolio Screenshot",
    links: [
      {
        href: "https://aderolaowaduge.github.io/pic-perf-portfolio/",
        label: "View Live Site",
      },
      {
        href: "https://github.com/aderolaowaduge/pic-perf-portfolio",
        label: "View Github Repo",
      },
    ],
  },
/*
  {
    id: 2,
    title: "Beauty Supply Homepage",
    titleLink: "https://aderolaowaduge.github.io/beauty-supply-homepage/",
    description: [
      `A modern, responsive beauty supply website prototype built with Vite, React, and Tailwind CSS. 
    The project showcases a clean, user-friendly interface designed to highlight natural beauty products and accessories.`,

      `It features interactive tabs, a gallery section, a reviews carousel, and embedded maps — all optimized for performance and accessibility. 
    This project was created to practice frontend development skills and design with real-world usability in mind.`,
    ],
    mediaType: "image",
    mediaSrc: "/assets/beauty-supply-homepage.png",
    mediaAlt: "Beauty Supply Homepage Screenshot",
    links: [
      {
        href: "https://aderolaowaduge.github.io/beauty-supply-homepage/",
        label: "View Live Site",
      },
      {
        href: "https://github.com/aderolaowaduge/beauty-supply-homepage",
        label: "View Github Repo",
      },
    ],
  },
*/
  {
    id: 3,
    title: "insta485",
    description: [
      `This project is an Instagram clone developed using Python and Flask for the backend, and JavaScript, React,
      and HTML for the frontend. CSS was used for styling. The feed is dynamically rendered on the client side,
      featuring infinite scrolling and double-tap to like functionality. Other pages are rendered server-side.
      Users can create accounts, log in using session-based authentication, and follow other users.`,
      `*This project was developed as part of EECS 485: Web Systems at the University of Michigan. Due to course
      honor code policies, I am unable to share the source code.`,
    ],
    mediaType: "video",
    mediaSrc: "/assets/insta485_demo.mp4",
    mediaPoster: "/assets/insta485.png",
    mediaAlt: "insta485 demo video",
    links: [], // no links here
  },
  {
    id: 4,
    title: "Destination Discovery Prototype",
    titleLink:
      "https://aderolaowaduge.github.io/gca-personalized-destinations/",
    description: [
      `As my final project for the Web Development Track of the Global Career Accelerator program, I developed a
      prototype for a vacation destination recommendation feature, designed to help users explore new locations
      based on their interests.
      The project was inspired by the Marriott Homes and Villas case study provided by Publicis Sapient and
      challenged me to apply frontend development skills, conduct user research, and think through product
      management concepts.`,
      `In this project, I focused on creating a more exploration-friendly user experience, helping users
      discover destinations with clearer guidance and personalized recommendations.`,
    ],
    mediaType: "image", // 'image' or 'video'
    mediaSrc: "/assets/homes_villas.png",
    mediaAlt: "Personalized Destinations Website",
    links: [
      {
        href: "https://docs.google.com/presentation/d/1XBO75SCQa0z8RhtZKKbtE23fbfvpk2H09XYyLBuozfc/present?slide=id.g34db2eb93e0_1_15",
        label: "View Prototype Google Slides",
      },
      {
        href: "https://github.com/aderolaowaduge/gca-personalized-destinations",
        label: "View Github Repo",
      },
    ],
  },
];

export default projects;
