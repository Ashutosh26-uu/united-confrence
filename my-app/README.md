# National Pharmacy Conference 2025 Website

This is a responsive website for the National Pharmacy Conference 2025 hosted by the Department of Pharmacy, United University.

## Features

- Responsive design that works on all device sizes
- Multi-page layout with React Router
- Dark mode toggle functionality
- Conference information including:
  - Hero section with countdown timer
  - About the conference and institution
  - Important dates timeline
  - Abstract submission guidelines
  - Registration information and fees
  - Program schedule
  - Speakers and committees
  - Venue and accommodation details
  - Sponsors showcase
  - Contact information
  - News and updates

## Technologies Used

- React + Vite
- TailwindCSS for styling
- React Router for navigation
- Lucide React for icons

## How to Run the Website

1. **Prerequisites**: Make sure you have Node.js installed on your system

2. **Navigate to project directory**:
   cd my-app

3. **Install dependencies**:
   npm install

4. **Start development server**:
   npm run dev

5. **Open in browser**: Visit `http://localhost:5173` in your browser

## For Production Deployment

1. **Create production build**:
   npm run build

2. **Preview production build**:
   npm run preview

## Project Structure

my-app/
├── public/                 # Static assets
│   ├── images/             # Image files
│   └── vite.svg            # Vite logo
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/              # Page components
│   ├── hooks/              # Custom React hooks
│   ├── data/               # Data files
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global CSS (Tailwind directives)
├── index.html              # HTML template
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # TailwindCSS configuration
└── postcss.config.js       # PostCSS configuration

## Troubleshooting

If you encounter issues with the development server:

1. Make sure all dependencies are installed: `npm install`
2. Clear node_modules and reinstall:
   rm -rf node_modules package-lock.json
   npm install
3. Check that Node.js is properly installed on your system

## Customization

- Update conference information in `src/data/conferenceInfo.js`
- Replace placeholder images in `public/images/` with actual images
- Modify color scheme by updating TailwindCSS configuration
- Add or remove pages by updating the router in `src/App.jsx`
