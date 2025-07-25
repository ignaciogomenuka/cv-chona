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
  about: "Data Scientist focused on Machine Learning",
  summary: "As a Data Scientist, I have successfully driven project decision making based on large datasets. I worked for Havas Media Group and Matterscale Ventures, where I developed Power BI reports for international brands and lead research and report creation for new prospects and current portfolio startups. I am also the co-founder of Speezard, the first web3 Accelerator in LATAM where we growth a +1000 tech entrepreneurs community and helped +40 startups validating their products.",
  avatarUrl: "https://avatars.githubusercontent.com/u/103946112?v=4",
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
      school: "LeWagon",
      degree: "Data Science Fulltime Bootcamp +400hs",
      start: "2024",
      end: "2024",
    },
    {
      school: "Universidad de Ciencias Empresariales y Sociales (UCES)",
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
      title: "Sr. Business Analyst",
      logo: ParabolLogo,
      start: "2023",
      end: "Today",
      description: "Lead research and report creation for new prospects and current portfolio startups on a variety of tech industries. Working remotely for C Level partners in topics like AI, Web3, and Data.",
    },
    {
      company: "Havas Media Group",
      link: "https://havas.com",
      badges: ["Remote"],
      title: "Senior Data Analyst",
      logo: ClevertechLogo,
      start: "2021",
      end: "2023",
      description: "Developed Power BI reports for international brands like Pedidos Ya, Puma, and Cencosud. Working with large datasets and ETL with SQL and Python.",
    },
    {
      company: "Speezard",
      link: "https://speezard.io/",
      badges: [],
      title: "Co-Founder",
      logo: Minimal,
      start: "2022",
      end: "2024",
      description: "Core member at Speezard, a blockchain product accelerator focused on helping early-stage teams validate product–market fit. Supported the launch of a community of 1,000 builders, coordinated hackathons with partners like Ripio, and contributed to the design of a token-based incentive model to reward contributors validating early-stage ideas.",
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
      techStack: ["Side Project", "Python", "Transformers", "Keras", "NVIDIA CUDA", "FastAPI"],
      description: "A model to extract stats from sports video",
      logo: ConsultlyLogo,
      link: {
        label: "chona.portfolio",
        href: "https://chona.framer.website/work",
      },
    },
    {
      title: "Resi Token",
      techStack: ["Blockchain", "Typescript", "Reward System", "EVM" ],
      description: "Resi-token is an ERC-20 token designed to incentivize community participation within the Speezard accelerator. Its primary purpose is to reward builders and contributors who support early-stage blockchain projects in validating product–market fit.",
      logo: MonitoLogo,
      links: [
  {
    label: "Github",
    href: "https://github.com/Comunidad-Resiliente/Resi-token/tree/main",
  },
    ],

    },
    {
      title: "Speezard Incubator",
      techStack: ["Side Project", "Web3", "Venture Capital", "Tech Community"],
      description: "Growth and validation of the first web3 Accelerator in LATAM",
      logo: Minimal,
      link: {
        label: "speezard.io",
        href: "https://www.speezard.io/",
      },
    },
    /*
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description: "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description: "Generates beautiful wallpapers using random shapes and gradients",
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
      techStack: ["Full Stack Developer", "TypeScript", "React", "Node.js", "GraphQL"],
      description: "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: ["Lead Frontend Developer", "TypeScript", "React", "Node.js", "GraphQL"],
      description: "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description: "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description: "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      }
    },
    */
  ] as const
};
