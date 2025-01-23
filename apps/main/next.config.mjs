import withBundleAnalyzer from "@next/bundle-analyzer"
import withPlugins from "next-compose-plugins"
import { env } from "./env.mjs"

/**
 * @type {import('next').NextConfig}
 */
const config = withPlugins([[withBundleAnalyzer({ enabled: env.ANALYZE })]], {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: { instrumentationHook: true },
  rewrites() {
    return [
      { source: "/healthz", destination: "/api/health" },
      { source: "/api/healthz", destination: "/api/health" },
      { source: "/health", destination: "/api/health" },
      { source: "/ping", destination: "/api/health" },
        // Investment app routes
        {
          source: "/investment",
          destination: `${env.INVESTMENT_URL}/investment`,
        },
        {
          source: "/investment/:path*",
          destination: `${env.INVESTMENT_URL}/investment/:path*`,
        },
        // Social app routes
        {
          source: "/social",
          destination: `${env.SOCIAL_URL}/social`,
        },
        {
          source: "/social/:path*",
          destination: `${env.SOCIAL_URL}/social/:path*`,
        },
        // Chat app routes
        {
          source: "/chat",
          destination: `${env.CHAT_URL}/chat`,
        },
        {
          source: "/chat/:path*",
          destination: `${env.CHAT_URL}/chat/:path*`,
        },
        // Profile app routes
        {
          source: "/profile",
          destination: `${env.PROFILE_URL}/profile`,
        },
        {
          source: "/profile/:path*",
          destination: `${env.PROFILE_URL}/profile/:path*`,
        },
    ]
  },
})

export default config
