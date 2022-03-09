/** @format */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: media, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('images/hero-pattern.jpg')",
        "project-pattern": "url('images/project-pattern.jpg')",
        "contact-pattern": "url('images/contact-pattern.jpg')",
        "contact-pattern-2": "url('images/contact-pattern-2.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-hero-patterns", "@tailwindcss/aspect-ratio")],
};
