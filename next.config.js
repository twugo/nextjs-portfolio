/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // for 'next export'
  images: {
    loader: 'akamai',
    path: '/'
  }
}

module.exports = nextConfig
