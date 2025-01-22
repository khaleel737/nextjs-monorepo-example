import { defineConfig } from "@modern-js/app-tools"

export default defineConfig({
  server: {
    port: Number(process.env.PROFILE_PORT) || 3004,
  },
  // ... other config
})
