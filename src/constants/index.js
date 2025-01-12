import pr3 from "../assets/pr3.png";

import {
  
    benefitIcon2,
    
    benefitImage2,
    chromecast,
    disc02,
    discord,
 
    figma,
    file02,
    framer,
    homeSmile,
    
  
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    
    roadmap3,
    
    searchMd,
    slack,
    sliders04,
    
  } from "../assets";
  
  export const navigation = [
    {
      id: "0",
      title: "About",
      url: "#About",
    },
    {
      id: "1",
      title: "Projects",
      url: "#Projects",
    },
    {
      id: "2",
      title: "Work Experience",
      url: "#Experience",
    },
    {
      id: "3",
      title: "Contact",
      url: "#Contact",
    },
    {
      id: "4",
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/lalitha-priya-361b64244/",
      onlyMobile: true,
    },
    {
      id: "5",
      title: "GitHub",
      url: "https://github.com/sherlockmoriarity",
      onlyMobile: true,
    },
  ];
  
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  

  

  
  export const brainwaveServices = [
    "Photo generating",
    "Photo enhance",
    "Seamless Integration",
  ];
  
  export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];
  
  export const roadmap = [
    
   
    {
      id: "2",
      title: "",
      text: "",
      date: "",
      
      imageUrl: roadmap3,
    },
   
  ];
  
  export const collabText =
    "I am currently pursuing my B.Tech in Computer Science from SRM Institute of Science and Technology (2022 to 2026). At NLC India Limited, I developed the front-end of the CSR website using JSF and the PrimeFaces framework, and implemented SQL queries in Oracle Database to retrieve CSR project data based on user-selected filters, reducing query response time by 55%. Leveraging modern frameworks, I strive to create scalable, user-centric solutions. I am proficient in React.js, Node.js, and MongoDB, and have experience working with RESTful APIs and integrating third-party services. These are my professional Skillset and I am looking forward to working with you.";
  
  export const collabContent = [
    {
      id: "0",
      title: "Reactjs",
      text: collabText,
    }
    
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "Figma",
      icon: figma,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "Notion",
      icon: notion,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "Discord",
      icon: discord,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "Slack",
      icon: slack,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "Photoshop",
      icon: photoshop,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Protopie",
      icon: protopie,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "Framer",
      icon: framer,
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "Raindrop",
      icon: raindrop,
      width: 38,
      height: 32,
    },
  ];
  
  
  
  export const benefits = [
    {
      id: "0",
      title: "Find Your Destination",
      text: "Web app to streamline the process of day trip planning tailored for introverts. ",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon2,
      image:"./src/assets/pr.png",
      imageUrl: benefitImage2,
    },
  {   id: "1",
      title: "Priority-Based Package Sorting System",
      text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      image:"./src/assets/pr2.png",
      light: true,
    },
    {
      id: "2",
      title: "Stock News Alert Messenger",
      text: "high-speed stock monitoring and alert system",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
    },
    {
      id: "3",
      title: "Password_manager",
      text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      backgroundUrl: "./src/assets/benefits/card-4.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "4",
      title: "Global Markets Performance Dashboard",
      text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      backgroundUrl: "./src/assets/benefits/card-5.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
    },
    {
      id: "5",
      title: "",
      text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
      backgroundUrl: "./src/assets/benefits/card-6.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
    },
  ];
  export const EXPERIENCES = [
    {
      year: "May 2024 - July 2024",
      role: "Software Developer Intern",
      company: "NLC India Limited",
      description: `• Developed the front-end of the NLC India’s CSR website using JSF and PrimeFaces framework with Spring Security for authentication; improving user engagement through seamless navigation.

                    • Used TortoiseSVN in a monorepo setup, following trunk-based development with feature flags to ensure  
                    collaboration and integration. Deployed on Apache Tomcat using Maven for build automation. 

                    • Collaborated with a team of 3 to implement SQL queries in Oracle Database to retrieve CSR project data  
                    based on user-selected filters, enhancing the website's search functionality, reducing query response time by  
                    55%, and supporting over 10,000 daily users. `,

      
    },
    
];
  
  

  export const repositories = [
    {
      id: 1,
      name: 'Find Your Destination',
      description:
        'Web app to streamline the process of day trip planning tailored for introverts based on user-selected features.',
      language: [' React.js', 'TailwindCSS', 'Three.js', 'GeminiAI', 'Firebase'],
      html_url: 'https://github.com/sherlockmoriarity/travel_app',
      homepage: 'https://travel-app-inky-omega.vercel.app/',
      image:"./src/assets/pr.png",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      
    },
    {
      id: 2,
      name: 'Priority-Based Package Sorting System',
      description:
        'A predictive model that assigns a priority score to package delivery tasks, improving logistical efficiency.',
      language: ['PyTorch'],
      html_url: 'https://github.com/sherlockmoriarity/Package-Sorting_and_Management',
      homepage: '',
      image:"./src/assets/pr2.png",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
    },
    {
      id: 3,
      name: 'Stock News Alert Messenger',
      description:
        'A high-speed stock monitoring and alert system that provides real-time updates on stock market.',
      language: ['Python', "REST API's", 'Twilio API'],
      html_url: 'https://github.com/sherlockmoriarity/Stock_News_Alert_Messaging',
      homepage: '',
      image:"./src/assets/pr3.png",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
    },
    {
      id: 4,
      name: 'Password_manager',
      description:
        'A secure password generator with a graphical user interface (GUI) built using Tkinter. It allows users to generate passwords with customizable options and securely stores the generated passwords in an encrypted file.',
      
      html_url: 'https://github.com/sherlockmoriarity/Password_manager',
      homepage: '',
      image:"/assets/pr4.png",
      backgroundUrl: "/assets/benefits/card-1.svg",
    },
    {
      id: 5,
      name: 'Global Markets Dashboard',
      description:
        'An Interactive dashboard that analyzes and visualizes major global stock indices, including the S&P 500, BSE, SSE, and FTSE,',
      
      html_url: 'https://github.com/sherlockmoriarity/markets',
      homepage: '',
      image:pr3,
      backgroundUrl: "./src/assets/benefits/card-1.svg",
    },
    {
      id: 6,
      name: 'Portfolio',
      description:
        'My personal portfolio website, showcasing projects, skills, and experience in software engineering.',
      
      html_url: 'https://github.com/lohitkolluri/Portfolio',
      homepage: 'https://lohit.is-a.dev',
      image:"./src/assets/pr6.png",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
    },
    // Add more repository objects as needed
  ];
  
