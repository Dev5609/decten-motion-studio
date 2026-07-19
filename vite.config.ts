import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Nitro auto-detects the deploy target from environment variables:
//   - Vercel sets `VERCEL=1`         -> nitro uses the `vercel` preset
//   - Netlify sets `NETLIFY=true`    -> nitro uses the `netlify` preset
//   - Lovable / local builds fall back to the default preset.
// You can also force a target with `NITRO_PRESET=<preset>`.
const preset =
  process.env.NITRO_PRESET ||
  (process.env.VERCEL ? "vercel" : undefined) ||
  (process.env.NETLIFY ? "netlify" : undefined) ||
  "vercel";

export default defineConfig({
  nitro: {
    preset,
  },

  tanstackStart: {
    server: { entry: "server" },
  },
});
