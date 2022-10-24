/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  env: {
    MONGODB_URI: 'mongodb+srv://headsmartv2:pleasework@cluster0.wki29a7.mongodb.net/?retryWrites=true&w=majority'
  }
}

module.exports = nextConfig
