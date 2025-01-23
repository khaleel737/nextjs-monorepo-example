import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
      INVESTMENT_URL: z.string(),
      SOCIAL_URL: z.string(),
      CHAT_URL: z.string(),
      PROFILE_URL: z.string(),
  },
  client: {},
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    INVESTMENT_URL: process.env.INVESTMENT_URL,
    SOCIAL_URL: process.env.SOCIAL_URL,
    CHAT_URL: process.env.CHAT_URL,
    PROFILE_URL: process.env.PROFILE_URL,
  },
  buildTimeEnv: {
    INVESTMENT_URL: process.env.INVESTMENT_URL,
    SOCIAL_URL: process.env.SOCIAL_URL,
    CHAT_URL: process.env.CHAT_URL,
    PROFILE_URL: process.env.PROFILE_URL,
  },
})
