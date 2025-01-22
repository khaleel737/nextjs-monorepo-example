import { defineConfig } from "@modern-js/app-tools"

export default defineConfig({
  server: {
    port: Number(process.env.INVESTMENTS_PORT) || 3003,
  },
  // ... other config
})
