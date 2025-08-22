import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "André",
  lastName: "Pilch",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Senior Product Designer & Front-end Engineer",
  avatar: "/images/avatar.jpg",
  email: "hello@andrepilch.com",
  location: "America/Chicago", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/andrepilch/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Crafting innovative products through design and code</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">WHCC Editors</strong>
      </>
    ),
    href: "/work/whcc-editors-suite",
  },
  subline: (
    <>
      I'm André Pilch, a Senior Product Designer & Front-end Engineer at{" "}
      <strong>White House Custom Colour</strong>, where I craft innovative
      <br /> products with over a decade of design experience.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        André Pilch is a Senior Product Designer & Front-end Engineer with over a decade of experience crafting innovative products.
        His work spans from persona research and design systems to front-end development, with expertise in creating 
        user-centered design solutions that bridge the gap between design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "White House Custom Colour",
        timeframe: "Present",
        role: "Senior Product Designer & Front-end Engineer",
        achievements: [
          <>
            Lead product design and front-end development for WHCC's suite of creative tools including Wall Designer, Album Designer, and Card Designer.
          </>,
          <>
            Conducted extensive persona research to understand customer needs and design user-centered solutions that improved workflow efficiency.
          </>,
          <>
            Developed comprehensive design systems that ensure consistency across multiple product offerings while maintaining brand identity.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "WHCC Design Tools",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Thomson Reuters",
        timeframe: "Previous",
        role: "Product Designer",
        achievements: [
          <>
            Designed and developed ProView, a comprehensive legal research platform that enhanced user experience for legal professionals.
          </>,
          <>
            Created innovative VR Reports App that received patent recognition for its unique approach to data visualization.
          </>,
        ],
        images: [],
      },
      {
        company: "La Forge Des Marques & Wowiwe Instruction Co.",
        timeframe: "Previous",
        role: "Product Designer",
        achievements: [
          <>
            Specialized in 3D modeling and virtual reality applications, creating immersive experiences for various client projects.
          </>,
          <>
            Developed expertise in emerging technologies including AR applications and virtual cell modeling.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Design & Technology",
        description: <>Focused on product design, user experience, and front-end development.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Product Design & UX",
        description: (
          <>Expert in user research, persona development, and creating design systems that scale across multiple products.</>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Design System",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Front-end Development",
        description: (
          <>Proficient in modern web technologies including React, Next.js, and creating responsive, accessible user interfaces.</>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Front-end Development",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "3D Modeling & AR/VR",
        description: (
          <>Experience with 3D modeling, augmented reality applications, and virtual reality development for immersive experiences.</>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "3D and VR Projects",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
