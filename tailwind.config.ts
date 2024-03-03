import headlessui from "@headlessui/tailwindcss";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#0079ff",
      },
    },
  },
  plugins: [forms, headlessui({ prefix: "ui" }).handler],
};
