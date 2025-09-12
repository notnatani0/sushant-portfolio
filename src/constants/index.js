export const myProjects = [
  {
    id: 1,
    title: "AI Job Application Assistant (Planned)",
    description:
      "An AI-powered assistant that will automate the job application process by discovering jobs, generating application emails, and sending them to hiring managers.",
    subDescription: [
      "A user profile system where candidates can input their skills, experiences, and preferences to enable AI job matching.",
      "Integrating AI to generate personalized emails tailored to each job description.",
      "Backend services with Node.js and Express.js to handle job data, email sending (via Nodemailer), and AI interactions.",
      "Design a modern frontend with Next.js, Tailwind CSS, and Shadcn UI for smooth user experience and responsive design.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/imageposter.jpg",
    tags: [
      {
        id: 1,
        name: "Nextjs",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "Expressjs",
        path: "/assets/logos/express.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 4,
        name: "Tailwind CSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "AI Mock Interview System (In Progress)",
    description:
      "An AI-powered mock interview platform built with Next.js, Tailwind CSS, Firebase, and Vapi, designed to help candidates practice real-world interview scenarios.",
    subDescription: [
      "Implemented authentication and user management using Firebase for secure sign-up and sign-in.",
      "Integrated Vapi for real-time AI-driven interview sessions with voice interaction.",
      "Structured a scalable Next.js architecture with routes for authentication, home, interview generation, and feedback pages.",
      "Planned deployment on GitHub and Vercel to showcase as a portfolio-ready full-stack project.",
    ],
    href: "https://github.com/notnatani0/interview-iq.git",
    logo: "",
    image: "/assets/projects/interviewbot.png",
    tags: [
      {
        id: 1,
        name: "Nextjs",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 3,
        name: "Vapi",
        path: "/assets/logos/vapilogo.png",
      },
      {
        id: 4,
        name: "Tailwind CSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "shadcn UI",
        path: "/assets/logos/shadcn-ui.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Real-Time Chat Application",
    description:
      "A modern real-time chat application built with React, Firebase, and Cloudinary for file sharing.",
    subDescription: [
      "Implemented Firebase Authentication for secure user sign-up and login.",
      "Built chat features with Firestore database to handle real-time messages.",
      "Integrated Cloudinary for storing images, files, and media uploads efficiently.",
      "Designed a responsive and minimal UI using Tailwind CSS and Shadcn UI components.",
      "Added support for dark/light mode and future extensions like voice notes.",
    ],
    href: "https://github.com/notnatani0/Chat-Appp.git",
    logo: "",
    image: "/assets/projects/react-chatapp.jpeg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "Firebase",
        path: "/assets/logos/firebase.svg",
      },
      {
        id: 4,
        name: "Tailwind CSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "Cloudinary",
        path: "/assets/logos/cloudinary.svg",
      },
    ],
  },
  {
    id: 4,
    title: "MyMovieList (Movie Explorer)",
    description: "A fast React + Vite movie search app powered by TMDB.",
    subDescription: [
      "Built with React and Vite for a snappy development and runtime experience.",
      "Integrates TMDB API to fetch trending, searched, and detailed movie data.",
      "Provides debounced search, loading indicators, and graceful empty states.",
      "Responsive UI with reusable components and accessible interactions.",
      "Environment-based API key handling for secure configuration.",
    ],
    href: "https://github.com/notnatani0/movie-appp.git",
    logo: "",
    image: "/assets/projects/movieapp.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "Tailwind CSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "TMBD",
        path: "/assets/logos/tmbdlogo.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "A responsive web application that provides real-time weather updates using the OpenWeather API.",
    subDescription: [
      "Integrated OpenWeather API to fetch current weather and forecast data.",
      "Implemented search functionality for global cities with dynamic weather display.",
      "Displayed key metrics such as temperature, humidity, wind speed, and weather conditions.",
      "Designed with a clean, user-friendly interface for quick access to weather information.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/imageposter.jpg",
    tags: [
      {
        id: 1,
        name: "Reactjs",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "Tailwind CSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "OpenWeather API",
        path: "/assets/logos/openWeather.png",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/notnatani0",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/sushant-natani",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ssushiee_/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Frontend Development Intern",
    job: "Vanillakart (Remote)",
    date: "2024-2025",
    contents: [
      "Developed 10+ reusable UI components using ReactJS and styled them with Tailwind CSS to create responsive web interfaces.",
      "Worked with WordPress to build dynamic websites, customizing 5+ themes and plugins for better content management.",
      "Collaborated with mentors and teammates on project tasks, improving communication and teamwork skills.",
    ],
  },
  {
    title: "Full-Stack Development Trainee",
    job: "GRRAS, In-campus Industry Training",
    date: "2023-2024",
    contents: [
      "Worked on full-stack development using the MERN stack (MongoDB, Express.js, React.js, Node.js), building 4+ mini projects.",
      "Implemented core concepts like REST APIs, MVC architecture, routing, and CRUD operations in collaborative projects.",
      "Practiced responsive design and component-based development using HTML, CSS (Bootstrap), and JavaScript.",
    ],
  },
  // {
  //   title: "Freelance Developer",
  //   job: "Self-Employed",
  //   date: "2025-Present",
  //   contents: [
  //     "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
  //     "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
  //   ],
  // },
];
// export const reviews = [
//   {
//     name: "Jack",
//     username: "@jack",
//     body: "I've never seen anything like this before. It's amazing. I love it.",
//     img: "https://robohash.org/jack",
//   },
//   {
//     name: "Jill",
//     username: "@jill",
//     body: "I don't know what to say. I'm speechless. This is amazing.",
//     img: "https://robohash.org/jill",
//   },
//   {
//     name: "John",
//     username: "@john",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://robohash.org/john",
//   },
//   {
//     name: "Alice",
//     username: "@alice",
//     body: "This is hands down the best thing I've experienced. Highly recommend!",
//     img: "https://robohash.org/alice",
//   },
//   {
//     name: "Bob",
//     username: "@bob",
//     body: "Incredible work! The attention to detail is phenomenal.",
//     img: "https://robohash.org/bob",
//   },
//   {
//     name: "Charlie",
//     username: "@charlie",
//     body: "This exceeded all my expectations. Absolutely stunning!",
//     img: "https://robohash.org/charlie",
//   },
//   {
//     name: "Dave",
//     username: "@dave",
//     body: "Simply breathtaking. The best decision I've made in a while.",
//     img: "https://robohash.org/dave",
//   },
//   {
//     name: "Eve",
//     username: "@eve",
//     body: "So glad I found this. It has changed the game for me.",
//     img: "https://robohash.org/eve",
//   },
// ];
