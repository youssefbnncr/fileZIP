module.exports = {
  content: [
    "./views/**/*.ejs", // Include EJS files
    "./src/**/*.{html,js}", // Include HTML & JS files inside /src
    "./public/**/*.html", // Include HTML files in /public
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#005AA7",
          green: "#4CAF50",
        },
        secondary: {
          lightBlue: "#009FFD",
          darkGreen: "#2E7D32",
        },
        neutral: {
          lightGray: "#F5F5F5",
          darkGray: "#333333",
        },
        accent: {
          yellow: "#FDCB58",
          red: "#E63946",
        },
      },
    },
  },
  plugins: [],
};
