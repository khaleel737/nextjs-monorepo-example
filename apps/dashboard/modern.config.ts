import { defineConfig } from "@modern-js/app-tools"

export default defineConfig({
  server: {
    port: Number(process.env.DASHBOARD_PORT) || 3002,
  },
  // ... other config
})
