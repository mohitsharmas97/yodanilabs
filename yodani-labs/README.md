# Yodani Labs - Startup Website

A modern, professional startup website built with React and Tailwind CSS.

## 🚀 Features

- ✨ Modern, clean, and professional design
- 🌙 Dark theme with gradient animations
- 📱 Fully responsive layout
- 🎨 Smooth animations and transitions
- ⚡ Built with React + Vite for optimal performance
- 🎯 All sections included: Hero, About, Services, Portfolio, Process, Contact, Footer

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🛠️ Installation

1. Navigate to the project directory:
```bash
cd yodani-labs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📝 Customization Guide

### 1. Adding the Hero Background Image

The hero background image is already set up! The file `Screenshot 2026-02-06 002744.png` has been copied to `public/hero-bg.png`.

**To change it:**
- Replace `public/hero-bg.png` with your preferred image
- Keep the filename as `hero-bg.png`, or update the path in `src/components/Hero.jsx` (line 7)

### 2. Adding LinkedIn and GitHub Links

**For Founders (About Section):**
- Open `src/components/About.jsx`
- Find lines 13 and 14 for Mohit Sharma
- Replace `YOUR_LINKEDIN_URL_HERE` and `YOUR_GITHUB_URL_HERE` with actual URLs
- Find lines 24 and 25 for Pushkar Sharma
- Replace the URLs similarly

**For Contact Section:**
- Open `src/components/Contact.jsx`
- Find line 109 and 120 for social links
- Replace `YOUR_LINKEDIN_URL_HERE` and `YOUR_GITHUB_URL_HERE`

**For Footer:**
- Open `src/components/Footer.jsx`
- Find lines 32 and 42
- Replace the placeholder URLs

### 3. Adding Portfolio Projects

**Open `src/components/Portfolio.jsx`**

The projects are defined in the `projects` array (lines 6-35). Each project has:

```javascript
{
  title: 'Project Name',
  description: 'Brief description of the project',
  techStack: ['React', 'Node.js', 'TensorFlow', 'MongoDB'],
  githubLink: 'https://github.com/yourusername/project',
  liveLink: 'https://project.com',
  image: null, // Optional: add image path from public folder
}
```

**To add a new project:**
1. Copy one of the existing project objects
2. Update all fields with your project information
3. Optionally add a project screenshot to the `public` folder and reference it in the `image` field

**Example:**
```javascript
{
  title: 'AI Traffic Detection System',
  description: 'Real-time traffic congestion detection using YOLOv8 and computer vision',
  techStack: ['Python', 'YOLOv8', 'Streamlit', 'OpenCV'],
  githubLink: 'https://github.com/mohit/traffic-detection',
  liveLink: 'https://traffic-demo.com',
  image: '/projects/traffic-app.png', // Add image to public/projects/ folder
}
```

### 4. Updating Contact Email

**In `src/components/Contact.jsx`:**
- Line 129: Update `contact@yodanilabs.com` with your actual email

**In `src/components/Footer.jsx`:**
- Line 94: Update the email address

### 5. Customizing Colors

The main color scheme uses purple and indigo gradients. To change:

**In `tailwind.config.js`:**
```javascript
theme: {
  extend: {
    colors: {
      primary: '#6366f1', // Change this
      secondary: '#8b5cf6', // Change this
    },
  },
}
```

## 🚢 Deployment on Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect it's a Vite project
6. Click "Deploy"

That's it! Your site will be live in minutes.

## 📁 Project Structure

```
yodani-labs/
├── public/
│   └── hero-bg.png          # Hero background image
├── src/
│   ├── components/
│   │   ├── Hero.jsx         # Hero section
│   │   ├── About.jsx        # About/Team section
│   │   ├── Services.jsx     # Services section
│   │   ├── Portfolio.jsx    # Portfolio/Projects section
│   │   ├── WhyChooseUs.jsx  # Why Choose Us section
│   │   ├── Process.jsx      # Process section
│   │   ├── Contact.jsx      # Contact form section
│   │   └── Footer.jsx       # Footer section
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles + Tailwind
│   └── main.jsx             # App entry point
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Dependencies

```

## 🎨 Sections Overview

1. **Hero** - Fullscreen landing with background image and CTA buttons
2. **About** - Team introduction with founder profiles
3. **Services** - 7 service offerings with icons
4. **Portfolio** - Project showcase grid (customizable)
5. **Why Choose Us** - 4 key advantages
6. **Process** - 6-step development process
7. **Contact** - Contact form and information
8. **Footer** - Links and copyright information

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📞 Support

For any questions or issues, contact: contact@yodanilabs.com

---

Built with ❤️ by Yodani Labs
