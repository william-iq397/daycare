import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase', '@pinia/nuxt', "@nuxt/ui","tailwindcss"],
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