// tailwind.config.js
// import { preset } from '@nuxt/ui';

export default {
    content: [
        "./components/**/*.{vue,js}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            animation: {
                wiggle: "wiggle 1s ease-in-out infinite",
                bounceSlow: "bounce-slow 3s infinite",
                float: "float 2s ease-in-out infinite",
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-3deg)" },
                    "50%": { transform: "rotate(3deg)" },
                },
                "bounce-slow": {
                    "0%, 100%": { transform: "translateY(-15%)" },
                    "50%": { transform: "translateY(0)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
        },
        plugins: [require("flowbite/plugin")],
    },
}
