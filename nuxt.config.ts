// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: "Frontend Mentor | FAQ Accordion",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-32x32.png",
        },
      ],
    },
  },
});
