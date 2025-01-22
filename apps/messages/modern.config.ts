import { defineConfig } from "@modern-js/app-tools"

export default defineConfig({
  server: {
    port: Number(process.env.MESSAGES_PORT) || 3005,
  },
  // ... other config
})
