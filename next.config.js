/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const withPWA = require('next-pwa')({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: !isProd
  }
})
const nextConfig = {
  reactStrictMode: true,
  withPWA
}

module.exports = nextConfig
