const nextConfig = {
  basePath: '',
  async rewrites() {
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/dashboard/:path*',
          destination: 'http://localhost:3002/dashboard/:path*',
        },
        {
          source: '/chat/:path*',
          destination: 'http://localhost:3003/chat/:path*',
        },
        {
          source: '/profile/:path*',
          destination: 'http://localhost:3004/profile/:path*',
        },
        {
          source: '/investment/:path*',
          destination: 'http://localhost:3005/investment/:path*',
        },
        {
            source: '/social/:path*',
            destination: 'http://localhost:3005/social/:path*',
          },
      ]
    }

    // Production rewrites
    return [
      {
        source: '/dashboard/:path*',
        destination: '/dashboard/:path*',
      },
      {
        source: '/chat/:path*',
        destination: '/chat/:path*',
      },
      {
        source: '/profile/:path*',
        destination: '/profile/:path*',
      },
      {
        source: '/investment/:path*',
        destination: '/investment/:path*',
      },
      {
        source: '/social/:path*',
        destination: '/social/:path*',
      },
    ]
  },
}

module.exports = nextConfig 