// tailwind.config.js
import { preset } from '@nuxt/ui';

export default {
  presets: [preset],  // Add Nuxt UI preset
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
