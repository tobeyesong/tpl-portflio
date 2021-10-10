/** @format */

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('images/hero-pattern.jpg')",
        "project-pattern": "url('images/project-pattern.jpg')",
        "contact-pattern": "url('images/contact-pattern.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-hero-patterns", "@tailwindcss/aspect-ratio")],
};
