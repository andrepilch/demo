import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About Me
        </h1>
        <p className="text-xl text-gray-600">
          Product designer passionate about creating meaningful digital experiences
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-64 h-64 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-500 text-lg">Your Photo</span>
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hello, I'm [Your Name]</h2>
            <p className="text-gray-600 leading-relaxed">
              I'm a product designer with [X] years of experience creating user-centered digital products. 
              I specialize in UX/UI design, user research, and design systems. My approach combines 
              analytical thinking with creative problem-solving to deliver solutions that are both 
              beautiful and functional.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What I Do</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• User Experience Design</li>
              <li>• User Interface Design</li>
              <li>• User Research & Testing</li>
              <li>• Design Systems</li>
              <li>• Prototyping & Wireframing</li>
              <li>• Design Strategy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Skills & Tools */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Design</h3>
            <div className="space-y-2 text-gray-600">
              <p>Figma</p>
              <p>Sketch</p>
              <p>Adobe Creative Suite</p>
              <p>Principle</p>
              <p>Framer</p>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Research</h3>
            <div className="space-y-2 text-gray-600">
              <p>User Interviews</p>
              <p>Usability Testing</p>
              <p>Surveys</p>
              <p>Analytics</p>
              <p>Personas</p>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Development</h3>
            <div className="space-y-2 text-gray-600">
              <p>HTML/CSS</p>
              <p>JavaScript</p>
              <p>React</p>
              <p>Git</p>
              <p>Design Systems</p>
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Experience</h2>
        <div className="space-y-8">
          <div className="border-l-4 border-gray-200 pl-6">
            <h3 className="text-lg font-semibold text-gray-900">Senior Product Designer</h3>
            <p className="text-gray-600 mb-2">Company Name • 2022 - Present</p>
            <p className="text-gray-600">
              Lead design for core product features, mentor junior designers, and collaborate with 
              cross-functional teams to deliver user-centered solutions.
            </p>
          </div>
          <div className="border-l-4 border-gray-200 pl-6">
            <h3 className="text-lg font-semibold text-gray-900">Product Designer</h3>
            <p className="text-gray-600 mb-2">Previous Company • 2020 - 2022</p>
            <p className="text-gray-600">
              Designed and shipped multiple product features, conducted user research, and 
              contributed to the development of design systems.
            </p>
          </div>
          <div className="border-l-4 border-gray-200 pl-6">
            <h3 className="text-lg font-semibold text-gray-900">UX Designer</h3>
            <p className="text-gray-600 mb-2">Another Company • 2018 - 2020</p>
            <p className="text-gray-600">
              Focused on user research and usability testing, created wireframes and prototypes, 
              and collaborated with developers on implementation.
            </p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="text-center bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Let's Work Together</h2>
        <p className="text-gray-600 mb-6">
          I'm always interested in new opportunities and collaborations. 
          Feel free to reach out if you'd like to discuss a project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="mailto:hello@example.com" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors"
          >
            Send Email
          </a>
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;