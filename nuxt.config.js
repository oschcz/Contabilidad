import theme from "@nuxt/content-theme-docs"

export default theme({
  i18n: {
    components: [
      "~/components", // default level is 0
      {
        path: "node_modules/@nuxt/content-theme-docs/src/components/app",
        level: 1,
      },
    ],
    docs: {
      primaryColor: "#ff5517",
    },
  },
})
