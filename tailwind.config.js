
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', "sans-serif"],
        manropes: ['var(--font-manrope)', "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "rgb(57 105 59)", // From light.css
          dark: "rgb(159 212 156)" // From dark.css
        },
        "primary-tint": {
          DEFAULT: "rgb(57 105 59)", // From light.css
          dark: "rgb(159 212 156)" // From dark.css
        },
        "on-primary": {
          DEFAULT: "rgb(255 255 255)", // From light.css
          dark: "rgb(6 57 17)" // From dark.css
        },
        "primary-container": {
          DEFAULT: "rgb(186 240 182)", // From light.css
          dark: "rgb(33 80 38)" // From dark.css
        },
        "on-primary-container": {
          DEFAULT: "rgb(0 33 6)", // From light.css
          dark: "rgb(186 240 182)" // From dark.css
        },
        secondary: {
          DEFAULT: "rgb(82 99 80)", // From light.css
          dark: "rgb(185 204 180)" // From dark.css
        },
        "on-secondary": {
          DEFAULT: "rgb(255 255 255)", // From light.css
          dark: "rgb(37 52 36)" // From dark.css
        },
        "secondary-container": {
          DEFAULT: "rgb(213 232 207)", // From light.css
          dark: "rgb(59 75 57)" // From dark.css
        },
        "on-secondary-container": {
          DEFAULT: "rgb(16 31 16)", // From light.css
          dark: "rgb(213 232 207)" // From dark.css
        },
        tertiary: {
          DEFAULT: "rgb(57 101 107)", // From light.css
          dark: "rgb(161 206 213)" // From dark.css
        },
        "on-tertiary": {
          DEFAULT: "rgb(255 255 255)", // From light.css
          dark: "rgb(0 54 60)" // From dark.css
        },
        "tertiary-container": {
          DEFAULT: "rgb(188 235 241)", // From light.css
          dark: "rgb(31 77 83)" // From dark.css
        },
        "on-tertiary-container": {
          DEFAULT: "rgb(0 31 35)", // From light.css
          dark: "rgb(188 235 241)" // From dark.css
        },
        error: {
          DEFAULT: "rgb(186 26 26)", // From light.css
          dark: "rgb(255 180 171)" // From dark.css
        },
        "on-error": {
          DEFAULT: "rgb(255 255 255)", // From light.css
          dark: "rgb(105 0 5)" // From dark.css
        },
        "error-container": {
          DEFAULT: "rgb(255 218 214)", // From light.css
          dark: "rgb(147 0 10)" // From dark.css
        },
        "on-error-container": {
          DEFAULT: "rgb(65 0 2)", // From light.css
          dark: "rgb(255 218 214)" // From dark.css
        },
        background: {
          DEFAULT: "rgb(247 251 242)", // From light.css
          dark: "rgb(16 20 15)" // From dark.css
        },
        "on-background": {
          DEFAULT: "rgb(24 29 23)", // From light.css
          dark: "rgb(224 228 219)" // From dark.css
        },
        surface: {
          DEFAULT: "rgb(247 251 242)", // From light.css
          dark: "rgb(16 20 15)" // From dark.css
        },
        "on-surface": {
          DEFAULT: "rgb(24 29 23)", // From light.css
          dark: "rgb(224 228 219)" // From dark.css
        },
        "surface-variant": {
          DEFAULT: "rgb(222 229 217)", // From light.css
          dark: "rgb(66 73 64)" // From dark.css
        },
        "on-surface-variant": {
          DEFAULT: "rgb(66 73 64)", // From light.css
          dark: "rgb(194 201 189)" // From dark.css
        },
        outline: {
          DEFAULT: "rgb(114 121 111)", // From light.css
          dark: "rgb(140 147 136)" // From dark.css
        },
        "outline-variant": {
          DEFAULT: "rgb(194 201 189)", // From light.css
          dark: "rgb(66 73 64)" // From dark.css
        },
        shadow: {
          DEFAULT: "rgb(0 0 0)", // From light.css
          dark: "rgb(0 0 0)" // From dark.css
        },
        scrim: {
          DEFAULT: "rgb(0 0 0)", // From light.css
          dark: "rgb(0 0 0)" // From dark.css
        },
        "inverse-surface": {
          DEFAULT: "rgb(45 50 44)", // From light.css
          dark: "rgb(224 228 219)" // From dark.css
        },
        "inverse-on-surface": {
          DEFAULT: "rgb(238 242 233)", // From light.css
          dark: "rgb(45 50 44)" // From dark.css
        },
        "inverse-primary": {
          DEFAULT: "rgb(159 212 156)", // From light.css
          dark: "rgb(57 105 59)" // From dark.css
        },
        "primary-fixed": {
          DEFAULT: "rgb(186 240 182)", // From light.css
          dark: "rgb(186 240 182)" // From dark.css
        },
        "on-primary-fixed": {
          DEFAULT: "rgb(0 33 6)", // From light.css
          dark: "rgb(0 33 6)" // From dark.css
        },
        "primary-fixed-dim": {
          DEFAULT: "rgb(159 212 156)", // From light.css
          dark: "rgb(159 212 156)" // From dark.css
        },
        "on-primary-fixed-variant": {
          DEFAULT: "rgb(33 80 38)", // From light.css
          dark: "rgb(33 80 38)" // From dark.css
        },
        "secondary-fixed": {
          DEFAULT: "rgb(213 232 207)", // From light.css
          dark: "rgb(213 232 207)" // From dark.css
        },
        "on-secondary-fixed": {
          DEFAULT: "rgb(16 31 16)", // From light.css
          dark: "rgb(16 31 16)" // From dark.css
        },
        "secondary-fixed-dim": {
          DEFAULT: "rgb(185 204 180)", // From light.css
          dark: "rgb(185 204 180)" // From dark.css
        },
        "on-secondary-fixed-variant": {
          DEFAULT: "rgb(59 75 57)", // From light.css
          dark: "rgb(59 75 57)" // From dark.css
        },
        "tertiary-fixed": {
          DEFAULT: "rgb(188 235 241)", // From light.css
          dark: "rgb(188 235 241)" // From dark.css
        },
        "on-tertiary-fixed": {
          DEFAULT: "rgb(0 31 35)", // From light.css
          dark: "rgb(0 31 35)" // From dark.css
        },
        "tertiary-fixed-dim": {
          DEFAULT: "rgb(161 206 213)", // From light.css
          dark: "rgb(161 206 213)" // From dark.css
        },
        "on-tertiary-fixed-variant": {
          DEFAULT: "rgb(31 77 83)", // From light.css
          dark: "rgb(31 77 83)" // From dark.css
        },
        "surface-dim": {
          DEFAULT: "rgb(215 219 211)", // From light.css
          dark: "rgb(16 20 15)" // From dark.css
        },
        "surface-bright": {
          DEFAULT: "rgb(247 251 242)", // From light.css
          dark: "rgb(54 58 52)" // From dark.css
        },
        "surface-container-lowest": {
          DEFAULT: "rgb(255 255 255)", // From light.css
          dark: "rgb(11 15 10)" // From dark.css
        },
        "surface-container-low": {
          DEFAULT: "rgb(241 245 236)", // From light.css
          dark: "rgb(24 29 23)" // From dark.css
        },
        "surface-container": {
          DEFAULT: "rgb(235 239 230)", // From light.css
          dark: "rgb(28 33 27)" // From dark.css
        },
        "surface-container-high": {
          DEFAULT: "rgb(230 233 225)", // From light.css
          dark: "rgb(39 43 37)" // From dark.css
        },
        "surface-container-highest": {
          DEFAULT: "rgb(224 228 219)", // From light.css
          dark: "rgb(50 54 48)" // From dark.css
        }
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};
