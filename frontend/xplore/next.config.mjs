// next.config.mjs

import runtimeCaching from 'next-pwa/cache.js'
import withPWA from 'next-pwa'

const pwaConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
})

const nextConfig = {
  // other configs
  reactStrictMode: false,
  ...pwaConfig,
}

export default nextConfig