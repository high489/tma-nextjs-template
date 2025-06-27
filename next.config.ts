import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/providers/i18n/i18n.ts')

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.0.225:3000', '127.0.0.1:3000', 'localhost:3000', '[::1]:3000'],
  // experimental: {
  //   serverActions: {
  //       allowedOrigins: ['192.168.0.225:3000', '127.0.0.1:3000', 'localhost:3000', '[::1]:3000'],
  //   },
  // },
}

export default withNextIntl(nextConfig)