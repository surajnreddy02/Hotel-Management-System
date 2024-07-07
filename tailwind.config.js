import { defineConfig } from 'windicss/helpers';
export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    // require('@tailwindcss/forms'),
  ],
});
