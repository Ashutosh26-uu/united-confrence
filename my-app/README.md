# United University Pharmacy Conference 2025 Website

🎓 **A modern, responsive conference website for the United University Pharmacy Conference 2025**

*Theme: "Innovative Approaches in Pharmaceutical Research and Patient Care: Bridging Science and Practice"*

## 🌟 Project Overview

This is a comprehensive conference website built for the Department of Pharmacy, United University. The website serves as the primary platform for conference information, registration, and attendee engagement for the October 15-17, 2025 event.

## ✨ Key Features

### 🎨 User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Mode Support**: Toggle between light and dark themes with persistent preference
- **Smooth Animations**: Enhanced user experience with CSS transitions and animations
- **Progress Bar**: Visual scroll progress indicator
- **Scroll to Top**: Floating action button for easy navigation
- **Floating Actions**: Quick access to important actions

### 📱 Multi-Page Architecture
- **Home Page**: Hero section with conference overview and key information
- **Abstracts**: Submission guidelines and requirements
- **Registration**: Conference registration with fee structure
- **Program**: Detailed conference schedule and sessions
- **Speakers**: Information about keynote speakers and committees
- **Venue**: Location details and accommodation information
- **Sponsors**: Showcase of conference sponsors and partners
- **Contact**: Contact information and inquiry forms

### 🔧 Technical Features
- **Component-Based Architecture**: Modular React components for maintainability
- **Custom Hooks**: Reusable logic with custom React hooks (useDarkMode)
- **Centralized Data Management**: Conference information stored in dedicated data files
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Optimized**: Built with Vite for fast development and production builds

## 🛠️ Technology Stack

### Frontend Framework
- **React 19.1.1**: Latest React with modern features and hooks
- **Vite 7.1.2**: Next-generation frontend build tool optimized for Vercel

### Styling & UI
- **TailwindCSS 4.1.12**: Utility-first CSS framework for rapid UI development
- **PostCSS**: CSS post-processing for enhanced styling capabilities
- **Lucide React**: Beautiful, customizable SVG icons

### Routing & Navigation
- **React Router DOM 7.8.1**: Declarative routing for React applications

### Deployment & Hosting
- **Vercel**: Optimized for serverless deployment with automatic builds
- **Vercel.json**: Pre-configured for SPA routing and performance

### Development Tools
- **ESLint**: Code linting for consistent code quality
- **Autoprefixer**: Automatic CSS vendor prefixing
- **TypeScript Support**: Type definitions for better development experience

## 🚀 Getting Started

### Prerequisites
- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd "United Pharmacy department project/my-app"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**: 
   Navigate to `http://localhost:5173`

### 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

### 🌐 Vercel Deployment (Recommended)

#### Quick Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/your-repo)

#### Manual Deployment Steps

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**:
   ```bash
   # Option 1: Using Vercel CLI
   vercel
   
   # Option 2: Connect GitHub repo to Vercel dashboard
   # Visit https://vercel.com/dashboard
   ```

3. **Environment Setup**:
   - The project is pre-configured with `vercel.json`
   - Automatic builds on git push
   - SPA routing handled automatically

#### Vercel Configuration Features
- ✅ **SPA Routing**: All routes redirect to `index.html`
- ✅ **Asset Caching**: Optimized cache headers for static assets
- ✅ **Build Optimization**: Chunked vendor libraries for faster loading
- ✅ **Auto-deployment**: Deploys on every git push to main branch

### 🏗️ Alternative Deployment Options

#### Local Production Build
```bash
npm run build     # Creates dist/ folder
npm run preview   # Preview production build
```

#### Other Hosting Platforms
- **Netlify**: Drag and drop `dist` folder
- **GitHub Pages**: Use `gh-pages` package
- **Firebase Hosting**: Use Firebase CLI
- **AWS S3**: Upload `dist` folder to S3 bucket

## 📁 Project Structure

```
my-app/
├── public/                     # Static Assets
│   ├── images/                 # Conference images and logos
│   │   ├── image1.jpg         # Hero background image
│   │   ├── united-university-logo.png
│   │   └── university-building-bg.jpg
│   └── vite.svg               # Vite logo
├── src/
│   ├── components/            # Reusable UI Components
│   │   ├── About.jsx         # About section component
│   │   ├── Abstracts.jsx     # Abstract submission info
│   │   ├── Contact.jsx       # Contact information
│   │   ├── CounterSection.jsx # Statistics counter
│   │   ├── FloatingActions.jsx # Floating action buttons
│   │   ├── Footer.jsx        # Site footer
│   │   ├── Hero.jsx          # Hero section with conference info
│   │   ├── ImportantDates.jsx # Timeline of important dates
│   │   ├── Navbar.jsx        # Navigation bar with dark mode
│   │   ├── Program.jsx       # Conference program details
│   │   ├── ProgressBar.jsx   # Scroll progress indicator
│   │   ├── Registration.jsx  # Registration information
│   │   ├── ScrollToTop.jsx   # Scroll to top button
│   │   ├── Speakers.jsx      # Speakers and committee info
│   │   ├── Sponsors.jsx      # Sponsors showcase
│   │   └── Venue.jsx         # Venue and accommodation
│   ├── pages/                 # Page Components
│   │   ├── AbstractsPage.jsx # Abstract submission page
│   │   ├── ContactPage.jsx   # Contact page
│   │   ├── Home.jsx          # Homepage layout
│   │   ├── ProgramPage.jsx   # Program schedule page
│   │   ├── RegistrationPage.jsx # Registration page
│   │   ├── SpeakersPage.jsx  # Speakers page
│   │   ├── SponsorsPage.jsx  # Sponsors page
│   │   └── VenuePage.jsx     # Venue information page
│   ├── hooks/                 # Custom React Hooks
│   │   └── useDarkMode.js    # Dark mode state management
│   ├── data/                  # Data Management
│   │   └── conferenceInfo.js # Centralized conference data
│   ├── utils/                 # Utility functions (empty)
│   ├── App.jsx               # Main application component
│   ├── App.css               # Component-specific styles
│   ├── index.css             # Global styles & Tailwind directives
│   └── main.jsx              # Application entry point
├── Configuration Files
├── .gitignore                # Git ignore rules
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── postcss.config.cjs        # PostCSS configuration
├── tailwind.config.js        # TailwindCSS configuration
├── vercel.json               # Vercel deployment config
└── vite.config.js            # Vite build configuration
```

## 🎯 Key Components Analysis

### Core Components
- **Hero.jsx**: Dynamic hero section with conference branding and parallax effects
- **Navbar.jsx**: Responsive navigation with dark mode toggle
- **ScrollToTop.jsx**: Smooth scroll-to-top functionality with visibility toggle
- **ProgressBar.jsx**: Visual scroll progress indicator
- **FloatingActions.jsx**: Quick access buttons for user actions

### Page Components
- **Home.jsx**: Combines Hero, About, CounterSection, and ImportantDates
- **Individual Pages**: Dedicated pages for each conference section

### Custom Hooks
- **useDarkMode.js**: Manages dark mode state with localStorage persistence

### Data Management
- **conferenceInfo.js**: Centralized conference data including dates, location, and contact info

## 🎨 Customization Guide

### Conference Information
```javascript
// Update conference details in src/data/conferenceInfo.js
const conferenceInfo = {
  name: "United University Pharmacy Conference 2025",
  theme: "Innovative Approaches in Pharmaceutical Research...",
  dates: { /* conference dates */ },
  location: { /* venue information */ },
  contact: { /* contact details */ }
};
```

### Styling Customization
- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Images**: Replace images in `public/images/` directory
- **Fonts**: Update CSS in `src/index.css`
- **Layout**: Modify component JSX files for layout changes

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/Navbar.jsx`

## 🐛 Troubleshooting

### Common Issues

**Development server won't start:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Build errors:**
```bash
# Check for linting errors
npm run lint

# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

**Vercel deployment issues:**
```bash
# Check build locally
npm run build

# Verify vercel.json configuration
# Check Vercel dashboard for build logs
# Ensure all dependencies are in package.json
```

**Dark mode not persisting:**
- Check browser localStorage permissions
- Verify `useDarkMode.js` hook implementation

### System Requirements
- Node.js 16+ 
- Modern browser with ES6+ support
- Minimum 2GB RAM for development

### Vercel Requirements
- Git repository (GitHub, GitLab, or Bitbucket)
- Vercel account (free tier available)
- Node.js 18+ (recommended for Vercel)

## 📄 License

This project is developed for the United University Pharmacy Conference 2025. All rights reserved.

## 🤝 Contributing

For contributions or issues, please contact the development team or submit issues through the appropriate channels.

---

**Conference Details:**
- **Date**: October 15-17, 2025
- **Venue**: United University Conference Center, Uttar Pradesh, India
- **Theme**: Innovative Approaches in Pharmaceutical Research and Patient Care
- **Contact**: contact@uniteduniversity.edu.in
