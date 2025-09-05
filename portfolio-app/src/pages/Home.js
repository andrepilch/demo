import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  // Sample project data - you can replace this with your actual projects
  const featuredProjects = [
    {
      title: "E-commerce Platform Redesign",
      description: "Complete redesign of a B2B e-commerce platform focusing on user experience and conversion optimization. Implemented modern design patterns and improved checkout flow.",
      imageUrl: "/assets/projects/ecommerce-redesign.jpg",
      tags: ["UX Design", "UI Design", "E-commerce"],
      link: "#",
      featured: true
    },
    {
      title: "Mobile Banking App",
      description: "Design and prototyping of a mobile banking application with focus on security, accessibility, and user-friendly interface for financial transactions.",
      imageUrl: "/assets/projects/banking-app.jpg",
      tags: ["Mobile Design", "Fintech", "Prototyping"],
      link: "#",
      featured: true
    },
    {
      title: "SaaS Dashboard",
      description: "Comprehensive dashboard design for a SaaS analytics platform. Created intuitive data visualization and streamlined user workflows.",
      imageUrl: "/assets/projects/saas-dashboard.jpg",
      tags: ["Dashboard Design", "Data Visualization", "SaaS"],
      link: "#",
      featured: true
    }
  ];

  const otherProjects = [
    {
      title: "Brand Identity System",
      description: "Complete brand identity design including logo, color palette, typography, and brand guidelines for a tech startup.",
      imageUrl: "/assets/projects/brand-identity.jpg",
      tags: ["Branding", "Logo Design", "Identity"],
      link: "#"
    },
    {
      title: "Website Redesign",
      description: "Modern website redesign with improved navigation, responsive design, and enhanced user experience.",
      imageUrl: "/assets/projects/website-redesign.jpg",
      tags: ["Web Design", "Responsive", "UX"],
      link: "#"
    },
    {
      title: "Mobile App Prototype",
      description: "High-fidelity prototype for a fitness tracking mobile application with social features and gamification.",
      imageUrl: "/assets/projects/fitness-app.jpg",
      tags: ["Mobile Design", "Prototyping", "Fitness"],
      link: "#"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Product Design Projects
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A collection of design work focusing on user experience, interface design, and digital product development.
        </p>
      </div>

      {/* Featured Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">Other Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;