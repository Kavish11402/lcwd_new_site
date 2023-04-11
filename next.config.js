/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:[
      'i.ytimg.com',
      'localhost',
      '192.168.29.203',
      'lcwd-new-site.vercel.app',
      'lcwdapi.learncodewithdurgesh.com',
      'api.learncodewithdurgesh.com',
      '127.0.0.1']
  }
}

module.exports = nextConfig