const nextConfig = {
  basePath: '/dashboard',
  reactStrictMode: true,
  async rewrites() {
    if (process.env.NODE_ENV === 'development') {
      return []
    }
    
    // Production rewrites
    return {
      beforeFiles: [
        {
          source: '/dashboard/:path*',
          destination: '/:path*',
        },
      ],
    }
  },
}

module.exports = nextConfig 