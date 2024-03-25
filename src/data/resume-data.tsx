import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ignacio Muñoz Gomeñuka",
  initials: "IMG",
  location: "Buenos Aires, Argentina, UTC -3",
  locationLink: "https://www.google.com/maps/place/Buenos+Aires",
  about:
    "Data Scientist focused on decison science and Machine Learning",
  summary:
    "As a Data Scientist, I have successfully driven project decision making based on large datasets. I lead teams effectively, ensuring an environment of innovation, iteration and creativity. Currently, I work mostly with Python, Sklearn and Tensorflow. I have 3 years of experience in working remotely and performing complex problem solving task autonomly.",
  avatarUrl: "https://github.com/account",
  personalWebsiteUrl: "https://framer.chona.website",
  contact: {
    email: "ignaciogomenuka@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Ignaciogomenuka",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ignacio-mg/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/chona_eth",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad Católica Argentina",
      degree: "Bachelor's Degree in Business Administration",
      start: "2019",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Matterscale Ventures",
      link: "https://matterscale.com",
      badges: ["Remote"],
      title: "Portfolio Analyst",
      logo: ParabolLogo,
      start: "2023",
      end: "2024",
      description:
        "Lead research and report creation for new prospects and current porfolio startups on a variety of tech industries. Working remotely for C Level partners in topics like AI, Web3 and Data.",
    },
    {
      company: "Havas Media Group",
      link: "https://havas.com",
      badges: ["Remote"],
      title: "Senior Data Analyst",
      logo: ClevertechLogo,
      start: "2021",
      end: "2023",
      description:
        "Developed Power BI reports for international brands like Pedidos Ya, Puma and Cencosud. Working with large datasets and ETL with SQL and Python.",
    },
    {
      company: "Speezard",
      link: "https://speezard.io/",
      badges: [],
      title: "Co Funder",
      logo: JojoMobileLogo,
      start: "2022",
      end: "2024",
      description:
        "Built the first web3 Accelerator in LATAM, side by side with a tech/entrepreneur community. We incubated +30 tech startups and lead team to product market fit and validate the idea with a +1000 web3 community.",
    },
  ],
  skills: [
    "Python",
    "SQL",
    "PowerBI",
    "Tensorflow",
    "Sklearn",
    "R",
    "Pandas",
  ],
  projects: [
    {
      title: "Sport Analyst",
      techStack: [
        "Side Project",
        "Python",
        "Transformers",
        "Keras",
        "NVIDIA CUDA",
        "FastAPI",
      ],
      description: "A model to extract stats from sports video",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      }
  ],
} as const;
