import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Alona H.",
  initials: "AH",
  location: "Manila, Philippines",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Software engineer dedicated to delivering top-quality applications, skilled at problem-solving and eager to learn.",
  summary:
    "Experienced software engineer committed to delivering efficient, reliable and high-quality applications. A self-motivated IT professional skilled in developing and improving applications using full-stack technologies such as C# .NET, JavaScript and TypeScript (Vue.js, React, and Knockout.js), HTML5, CSS3 and MS SQL. Works well independently and as a part of a team, adaptable, passionate to learn emerging technologies and has a strong drive to overcome challenges.",
  avatarUrl: "https://avatars.githubusercontent.com/u/57196291?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "alonahalover@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/alx0-dev",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alonahalover/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Baguio",
      degree: "Bachelor's Degree in Information Technology",
      start: "2013",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Manulife IT Delivery Center, Asia",
      link: "https://www.linkedin.com/company/manulife-it-delivery-asia-center-inc/mycompany/",
      badges: [],
      title: ".NET Software Engineer",
      logo: ParabolLogo,
      start: "2022",
      end: "Current",
      description: [
        "Develop new applications and features with C# .NET Core, Kafka, and MS SQL for insurance claim verification, ensuring code quality with XUnit tests.",
        "Create Node.js applications to address current issues, testing with Jest.",
        "Implement Docker for streamlined deployment.",
        "Utilize Jenkins for pipeline deployment and conduct smoke testing on dev environments.",
        "Offer technical analysis and documentation for feature impacts.",
        "Completed intensive two-week training in MERN stack, GraphQL, CI/CD, and event-driven development, culminating in a hackathon.",
      ],
    },
    {
      company: "RightCrowd Software",
      link: "https://www.rightcrowd.com/",
      badges: [],
      title: "Software Engineer",
      logo: ClevertechLogo,
      start: "2020",
      end: "2022",
      description: [
        "Developed enterprise visitor management products using JavaScript, TypeScript (Vue.js, Knockout.js), C# .NET Framework, and MS SQL.",
        "Enhanced project development efficiency with organization-wide npm framework packages, fostering standardized processes.",
        "Improved existing products for enhanced usability and user experience.",
        "Implemented Wallaby.js unit testing for new and existing applications.",
        "Established CI/CD builds and release pipelines using TFS Build Server.",
        "Produced technical documentation and conducted code reviews for quality assurance.",
        "Undertook intensive development and training at RightCrowd's Gold Coast office, fostering project success and personal growth.",
      ],
    },
    {
      company: "Qualis Consulting Inc.",
      link: "https://www.linkedin.com/company/qualis-consulting-inc/about/",
      badges: [],
      title: "Technical Consultant (Front-End Developer)",
      logo: JojoMobileLogo,
      start: "2018",
      end: "2020",
      description: [
        "Contributed to the rewrite of a large enterprise system into a modern web app for utility companies, managing customer, financial, and geographic info systems.",
        "Developed responsive web apps using ASP.NET Web API for backend and AngularJS, KendoUI, Bootstrap for frontend.",
        "Conducted POCs for enhanced user experience and participated in code reviews to maintain coding standards.",
        "Provided training on software development processes for new team members.",
      ],
    },
    {
      company: "Texas Instruments Philippines, Inc.",
      link: "https://www.linkedin.com/company/qualis-consulting-inc/about/",
      badges: [],
      title: "Application Developer Intern",
      logo: JojoMobileLogo,
      start: "2018",
      end: "2020",
      description: [
        "Created a dashboard automating burn-in reports, reducing creation time from 24 days to 3 minutes, with dynamic filtering support using TIBCO Spotfire and IronPython.",
        "Presented project findings to employees and management.",
        "Engaged in training programs for tools and languages like PL/SQL, Java Spring Boot, and Perl.",
      ],
    },
  ],
  skills: [
    ".NET",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Vue",
    "React",
    "Next.js",
    "MS SQL",
    "CI/CD",
  ],
  projects: [
    {
      title: "Airbnb Listing REST API",
      techStack: ["Node.js", "Express", "MongoDB"],
      description:
        "A REST API that returns AirBnB listings from MongoDB Atlas Sample Dataset.",
      logo: ConsultlyLogo,
      link: {
        label: "Airbnb Listing REST API",
        href: "https://github.com/alx0-dev/airbnb-listing-rest",
      },
    },
    {
      title: "Weather App",
      techStack: ["Node.js", "Express", "ejs", "OpenWeatherMap-API"],
      description:
        "A weather app built with Node leveraging the OpenWeatherMap API.",
      logo: MonitoLogo,
      link: {
        label: "Weather App",
        href: "https://github.com/alx0-dev/node-weather-app",
      },
    },
  ],
} as const;
