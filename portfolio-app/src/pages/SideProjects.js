import React from 'react';
import ProjectCard from '../components/ProjectCard';

const SideProjects = () => {
  const sideProjects = [
    {
      title: "Design System Library",
      description: "Personal design system built with React components and Storybook documentation. Includes reusable components, tokens, and guidelines.",
      imageUrl: "/assets/projects/design-system.jpg",
      tags: ["Design System", "React", "Storybook"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with modern web technologies. Features responsive design and smooth animations.",
      imageUrl: "/assets/projects/portfolio-site.jpg",
      tags: ["Web Development", "React", "Tailwind"],
      link: "#"
    },
    {
      title: "Mobile App Concept",
      description: "Conceptual mobile app design for a productivity tool. Includes user research, wireframes, and high-fidelity prototypes.",
      imageUrl: "/assets/projects/productivity-app.jpg",
      tags: ["Mobile Design", "Concept", "Prototyping"],
      link: "#"
    },
    {
      title: "Illustration Series",
      description: "Digital illustration series exploring themes of technology and human connection. Created using various digital art tools.",
      imageUrl: "/assets/projects/illustrations.jpg",
      tags: ["Illustration", "Digital Art", "Creative"],
      link: "#"
    },
    {
      title: "Open Source Contribution",
      description: "Contributions to open source design tools and libraries. Includes bug fixes, feature additions, and documentation improvements.",
      imageUrl: "/assets/projects/open-source.jpg",
      tags: ["Open Source", "Development", "Community"],
      link: "#"
    },
    {
      title: "Design Challenge",
      description: "Weekly design challenges exploring different aspects of UX/UI design. Quick iterations and experimental approaches.",
      imageUrl: "/assets/projects/design-challenges.jpg",
      tags: ["Design Challenge", "Experimentation", "Learning"],
      link: "#"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Side Projects
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Personal projects, experiments, and creative explorations outside of my main work.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sideProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <p className="text-gray-600 mb-4">
          Interested in collaborating on a project?
        </p>
        <a 
          href="mailto:hello@example.com" 
          className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
};

export default SideProjects;