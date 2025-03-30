// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
    // Configure the paths to all of your template files
    content: [
      "./index.html",            // Your main HTML file
      "./src/**/*.{js,ts,jsx,tsx}", // All JS/TS/JSX/TSX files in src/**
    ],
    // Default theme (can be extended later)
    theme: {
      extend: {},
    },
    // Default plugins (can be added later)
    plugins: [],
  }