// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/styles/styles.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  buildModules: ["@pinia/nuxt"],
  nitro: {
    plugins: ["@/server/db/index.ts"],
  },
});
