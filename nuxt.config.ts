import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/supabase", "@nuxtjs/tailwindcss", "@pinia/nuxt"],
  supabase: {
    redirect: false,
    redirectOptions: {
      login: "/login",      // Redirect here after login if not logged in
      callback: "/confirm", // Redirect after Supabase auth callback
      exclude: [],          // Paths that skip redirection logic
      cookieRedirect: false // Disable cookie-based redirection
    },
  },
});
