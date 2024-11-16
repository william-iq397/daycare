import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
    supabase: {
        redirect: false,
        redirectOptions: {
            login: "/login",
            callback: "/confirm",
            include: undefined,
            exclude: [],
            cookieRedirect: false,
        },
    },
})