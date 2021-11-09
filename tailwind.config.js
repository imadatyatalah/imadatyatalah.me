/* eslint @typescript-eslint/no-var-requires: "off" */
const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./src/**/**/*.{jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },

      colors: {
        gray: {
          0: "#fff",
          100: "#fafafa",
          200: "#eaeaea",
          300: "#999999",
          400: "#888888",
          500: "#666666",
          600: "#444444",
          700: "#333333",
          800: "#222222",
          900: "#111111",
        },
        grey: colors.gray,
        fuchsia: colors.fuchsia,
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            a: {
              color: theme("colors.fuchsia.700"),
            },
            blockquote: {
              color: theme("colors.grey.600"),
            },
            "> ul > li > *:first-child": {
              marginTop: 0,
            },
            "> ul > li > *:last-child": {
              marginBottom: 0,
            },
            thead: {
              borderBottomColor: theme("colors.gray.200"),
            },
            code: { color: theme("colors.pink.500") },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.200"),
            a: {
              color: theme("colors.fuchsia.500"),

              code: { color: theme("colors.fuchsia.500") },
            },
            blockquote: {
              borderLeftColor: theme("colors.gray.700"),
              color: theme("colors.gray.300"),
            },
            "h2,h3,h4": {
              color: theme("colors.gray.100"),
            },
            hr: { borderColor: theme("colors.gray.700") },
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.500") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.gray.500") },
              },
            },
            strong: { color: theme("colors.gray.100") },
            thead: {
              color: theme("colors.gray.100"),
              borderBottomColor: theme("colors.gray.600"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
