/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(0deg, rgba(28, 28, 28, 0.32) 0%, rgba(28, 28, 28, 0.32) 100%)",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        blueLight: {
          blue20: "#1B264F",
          blue40: "#274690",
          blue50: "#576CA8",
        },
        blueDark: {
          blue20: "#576CA8",
          blue40: "#274690",
          blue50: "#1B264F",
        },
        neutralLight: {
          neutral10: "#1C1C1C",
          neutral20: "#2E2E2E",
          neutral40: "#808080",
          neutral60: "#B3B3B3",
          neutral80: "#D6D6D6",
          neutral90: "#F5F3F5",
          neutral100: "#FFFFFF",
        },
        neutralDark: {
          neutral10: "#FFFFFF",
          neutral20: "#F5F3F5",
          neutral40: "#D6D6D6",
          neutral60: "#B3B3B3",
          neutral80: "#808080",
          neutral90: "#2E2E2E",
          neutral100: "#1C1C1C",
        },
      },
      screens: {
        sm: "375px", // Small screens, mobile
        md: "768px", // Medium screens, tablets
        lg: "1024px", // Large screens, laptops
        xl: "1440px", // Extra large screens, desktops
      },
    },
  },
  plugins: [],
};
