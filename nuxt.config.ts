import { defineNuxtConfig } from "nuxt";
import Icons from "unplugin-icons/vite";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "unplugin-icons/nuxt", "@nuxt/content"],
  buildModules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Teko: [500],
      Poppins: {
        ital: [900],
      },
    },
  },
  vite: {
    plugins: [
      Icons({
        // the feature below is experimental ⬇️
        autoInstall: true,
      }),
    ],
  },
});
