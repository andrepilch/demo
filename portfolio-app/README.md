# Portfolio Website

A modern React portfolio website built with Tailwind CSS, featuring a clean design inspired by contemporary portfolio sites.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Layout**: Clean header, footer, and content areas
- **Project Showcase**: Dedicated pages for main work and side projects
- **About Page**: Professional about section with skills and experience
- **Navigation**: Smooth routing with React Router

## Project Structure

```
src/
├── components/
│   ├── Layout.js          # Main layout wrapper
│   └── ProjectCard.js     # Reusable project card component
├── pages/
│   ├── Home.js           # Main portfolio page
│   ├── SideProjects.js   # Side projects page
│   └── About.js          # About page
└── assets/
    └── projects/         # Project-specific assets

public/
├── assets/
│   └── projects/         # Public project assets
└── favicon.svg          # Site favicon
```

## Adding Project Assets

### For Project Images

1. **Add images to the public directory**:
   ```
   public/assets/projects/
   ├── project-1-hero.jpg
   ├── project-1-thumbnail.jpg
   ├── project-2-hero.jpg
   └── project-2-thumbnail.jpg
   ```

2. **Update project data in pages**:
   ```javascript
   const projects = [
     {
       title: "Your Project Name",
       description: "Project description...",
       imageUrl: "/assets/projects/your-project-image.jpg",
       tags: ["UX Design", "UI Design"],
       link: "https://your-project-link.com"
     }
   ];
   ```

### Asset Organization Tips

- Use descriptive filenames: `ecommerce-redesign-hero.jpg`
- Optimize images for web (WebP format recommended)
- Keep hero images around 1200x800px
- Thumbnail images around 400x300px
- Use consistent naming conventions

## Customization

### Colors and Typography

The design uses a clean, minimal color palette:
- Primary: Gray scale (50-900)
- Accent: Custom colors can be added to `tailwind.config.js`
- Font: Inter (Google Fonts)

### Layout Components

- **Layout.js**: Main wrapper with header/footer
- **ProjectCard.js**: Reusable project display component
- Modify these components to match your brand

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm start
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Content Updates

### Home Page (`src/pages/Home.js`)
- Update `featuredProjects` array with your main work
- Update `otherProjects` array with additional projects
- Modify hero section text

### Side Projects (`src/pages/SideProjects.js`)
- Update `sideProjects` array with personal projects
- Add your contact information

### About Page (`src/pages/About.js`)
- Replace placeholder content with your information
- Update skills, tools, and experience sections
- Add your photo and contact details

### Layout (`src/components/Layout.js`)
- Update site title and navigation
- Add your social media links in footer
- Customize header styling

## Deployment

The app can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

Run `npm run build` and deploy the `build` folder.