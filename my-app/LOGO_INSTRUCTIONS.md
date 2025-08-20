# United University Logo Setup

## Instructions to add the United University logo:

1. Save the United University logo image you provided as:
   `public/images/united-university-logo.png`

2. The logo should be in PNG format for best quality with transparency

3. Recommended dimensions: 200x120 pixels (or similar aspect ratio)

## Current Implementation:

- The logo will appear in the navbar (top-left)
- The logo will appear on the hero section of the homepage
- Fallback images are configured in case the logo file is missing

## Dark Mode Features:

✅ Dark mode toggle button in navbar
✅ Persistent dark mode preference (saved in localStorage)
✅ Smooth transitions between light and dark modes
✅ All components support dark mode styling

## To test dark mode:
1. Click the moon/sun icon in the navigation bar
2. The entire website should switch between light and dark themes
3. Your preference will be remembered when you reload the page

## Files Updated:
- Hero.jsx - Added logo and countdown timer
- Navbar.jsx - Added logo and improved dark mode
- App.jsx - Fixed dark mode state management
- useDarkMode.js - Improved dark mode functionality
- index.css - Added smooth transitions