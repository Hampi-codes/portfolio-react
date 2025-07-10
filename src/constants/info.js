import { images } from "../constants";

const info = {
  description:
    "Hi there, I'm <span>Yogesh</span> – a passionate front-end developer with a focus on <span>React.js</span> and modern UI design. I craft clean, efficient, and responsive web interfaces. I genuinely enjoy what I do (<span>building intuitive user experiences!</span>) and have a growing interest in <span>backend integration</span> & <span>native app development</span>. Always striving to learn and improve – that's what keeps me going. When it comes to personality, I’d describe myself as <span>goal-driven</span>, a <span>team-oriented collaborator</span> who also excels in <span>independent work</span>. Think of me as a <span>dedicated</span>, <span>curious</span>, and <span>approachable</span> developer with a love for turning ideas into reality.",
  abouts: [
    {
      title: "Front-end",
      description:
        "I build scalable and responsive single-page applications using HTML, CSS, React.js, and TypeScript.",
      img: images.developer,
    },
    {
      title: "Native Apps",
      description:
        "I develop smooth and scalable mobile applications for iOS and Android platforms using React Native.",
      img: images.mobileDeveloper,
    },
    {
      title: "UI/UX",
      description:
        "I focus on building clean, responsive, and accessible user interfaces based on modern UI/UX principles.",
      img: images.problemSolver,
    },
  ],
  projects: [
    {
      title: "Quizzy",
      description:
        "Quizzy is an interactive and responsive quiz application built using React.js and Redux Toolkit. It integrates with an external trivia API to dynamically generate quizzes based on selected categories and difficulty levels. The app features real-time scoring, intuitive UI, and smooth navigation, offering an engaging way to test knowledge across various topics.",
      tag: "Try me",
      image: images.quizzyApp,
      codeLink: "https://github.com/Hampi-codes/Quiz-app",
      projectLink: "https://quizzy-by-yogesh.netlify.app",
      level: "Intermediate",
    },
    {
      title: "HRMS",
      description:
        "A full-featured Human Resource Management System (HRMS) built using React.js, Redux Toolkit, and MUI. The system includes modules for employee management, leave and WFH tracking, attendance monitoring, salary structure and tax slab setup, holiday calendars, and real-time salary calculations. Designed with an intuitive UI and scalable architecture to streamline HR operations for modern organizations.",
      tag: "Employee Management",
      image: images.hrms,
      level: "Advanced",
    },
    {
      title: "E-kachra",
      description:
        "E-kachra is an interactive e-waste facility locator and awareness platform built with HTML5, CSS3, JavaScript, and Firebase. It helps users locate nearby e-waste collection centers, educates them through dynamic pop-ups and a built-in chatbot, and allows users to submit details of their e-waste to calculate its value in E-points. The platform promotes responsible disposal and digital engagement with a clean, responsive interface.",
      tag: "E-waste facility locator",
      image: images.eKachraApp,
      projectLink: "https://e-kachra.netlify.app",
      level: "Intermediate",
    },
    {
      title: "Smart City Management System",
      description:
        "A comprehensive SaaS-based Smart City Management System (SCMS) built using React.js, Redux Toolkit, Ant Design, Leaflet, BPMN.io, and Apache Superset. The platform supports multi-tenant architecture and includes modules for user, project, and device management, ticketing system, role & permission controls, workflow creation, inbuilt GIS with Leaflet, and powerful data visualizations via Superset. Designed for advanced city-wide operations with a modern UI and scalable architecture.",
      tag: "SaaS Platform",
      image: images.smartCity,
      level: "Advanced",
    },
    {
      title: "Wetherly",
      description:
        "A sleek weather application that fetches real-time weather data using an external API, styled with Tailwind CSS and developed using React and TypeScript.",
      tag: "Check future",
      image: images.wetherApp,
      codeLink: "https://github.com/Hampi-codes/weatherApp",
      projectLink: "https://wetherly.netlify.app",
      level: "Beginner",
    },
    {
      title: "To Do App",
      description:
        "A productivity-focused to-do list app built with React, Redux, and Material UI, featuring task creation, filtering, and local state management.",
      tag: "Life untaggler",
      image: images.toDoApp,
      codeLink: "https://github.com/Hampi-codes/todo",
      projectLink: "https://to-do-by-yogesh.netlify.app",
      level: "Beginner",
    },
  ],
  skills: [
    {
      bgColor: "#E6F8FD",
      icon: images.react,
      name: "React.js",
    },
    {
      bgColor: "#EDE7F6",
      icon: images.redux,
      name: "Redux",
    },
    {
      bgColor: "#FFE8E0",
      icon: images.html,
      name: "HTML",
    },
    {
      bgColor: "#E0F0FF",
      icon: images.css,
      name: "CSS",
    },
    {
      bgColor: "#FFF9DB",
      icon: images.javascript,
      name: "Javascript",
    },
    {
      bgColor: "#E2EDFA",
      icon: images.typescript,
      name: "Typescript",
    },
    {
      bgColor: "#E5F4E3",
      icon: images.leaf,
      name: "Leaflet",
    },
    {
      bgColor: "#E3F2FD",
      icon: images.mu5,
      name: "Material UI",
    },
    {
      bgColor: "#E6F0FF",
      icon: images.antd,
      name: "Ant Design",
    },
    {
      bgColor: "#fde3f5",
      icon: images.sass,
      name: "Sass",
    },
    {
      bgColor: "#DFF8FB",
      icon: images.tailwind,
      name: "Tailwind",
    },
    {
      bgColor: "#FFE5E5",
      icon: images.rtl,
      name: "React Testing Lib",
    },
    {
      bgColor: "#E9F2FF",
      icon: images.jira,
      name: "Jira",
    },
    {
      bgColor: "#FFE6DC",
      icon: images.git,
      name: "Git",
    },
  ],

  experience: [
    {
      works: [
        {
          name: "Frontend Trainee",
          company: "InnoBit Systems LLC",
        },
        {
          desc: "React.js, Typescript, Redux, Material Ui, RESTful API and many others",
          name: "Worked Upon HRMS Project",
        },
      ],
      year: "Sept 2023 - May 2024",
    },
    {
      works: [
        {
          name: "React.js developer",
          company: "InnoBit Systems LLC",
        },
        {
          desc: "React JS, Redux, Ant Design, Leaflet, RESTful API, Supert and many others",
          name: "Worked upon Smart City Management System",
        },
      ],
      year: "Jun 2024 - Present",
    },
  ],
};

export default info;
