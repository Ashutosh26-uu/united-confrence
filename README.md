# United University Conference 2024

A modern, responsive React.js Single Page Application (SPA) for the United University Conference 2024, featuring an interactive user interface, smooth animations, and comprehensive conference information.

## 🌟 Key Features

### 🎯 Smart Navigation System
- Tab-based navigation with smooth scrolling
- Responsive design with mobile-first approach
- Active section highlighting
- Dropdown menus for better organization
- Mobile-optimized hamburger menu

### 🖼️ Interactive UI Components
- Hero section with countdown to conference (December 31, 2024)
- Animated cards for speakers and sponsors
- Interactive venue section with Google Maps integration
- Dynamic papers submission system with form validation
- Image galleries with hover effects

### 🎨 Visual Enhancements
- Modern, clean UI with professional color scheme
- Smooth animations and transitions
- Responsive design for all screen sizes
- Optimized images for fast loading
- Accessibility features (ARIA labels, keyboard navigation)

### 📱 Mobile Responsive
- Fully responsive layout for all devices
- Touch-friendly navigation
- Optimized images and assets
- Mobile-specific UI/UX improvements

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher) or Yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd conference-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🛠️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── AboutPrayagraj/   # About section with tourist attractions
│   ├── CreativeElements/ # Decorative UI elements
│   ├── Footer/           # Footer component
│   ├── Header/           # Navigation header
│   ├── Home/             # Landing page components
│   ├── Papers/           # Paper submission section
│   ├── Registration/     # Registration form
│   ├── Speakers/         # Speakers section
│   └── Venue/            # Venue information and map
├── hooks/               # Custom React hooks
├── App.js               # Main application component
└── index.js             # Application entry point
```

## 🎨 Customization

### Update Conference Details
- Edit `src/constants/config.js` for conference-specific settings
- Update the countdown date in the Home component
- Modify the color scheme in `src/styles/theme.js`

### Add/Update Content
- **Speakers**: Update `src/data/speakers.js`
- **Sponsors**: Modify `src/data/sponsors.js`
- **Schedule**: Update `src/data/schedule.js`
- **Venue**: Update map coordinates in the Venue component

### Add Images
- Place images in `public/images/`
- Organize by section (speakers, sponsors, venue, etc.)
- Use WebP format for better performance

## 📦 Building for Production

```bash
# Create production build
npm run build

# Serve the production build locally
npx serve -s build
```

## 🌐 Deployment

The app is ready to be deployed! You can deploy it to any static hosting service:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React.js](https://reactjs.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Google Maps API](https://developers.google.com/maps)
- [Create React App](https://create-react-app.dev/)

---

<div align="center">
  Made with ❤️ for United University Conference 2024
</div>