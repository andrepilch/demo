import React from 'react';

const ProjectCard = ({ 
  title, 
  description, 
  imageUrl, 
  tags = [], 
  link = null,
  featured = false 
}) => {
  const CardContent = () => (
    <div className={`group cursor-pointer transition-all duration-300 hover:shadow-lg ${
      featured ? 'bg-white border border-gray-200' : 'bg-white border border-gray-100'
    }`}>
      {/* Image */}
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Arrow indicator */}
        <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
          <span>View project</span>
          <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

export default ProjectCard;