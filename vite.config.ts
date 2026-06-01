export default defineConfig({
  nitro: {
    preset: "vercel"
  },

  tanstackStart: {
    server: { entry: "server" },
  },
});
