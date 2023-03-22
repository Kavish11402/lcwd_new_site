/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['i.ytimg.com','localhost','api.learncodewithdurgesh.com','127.0.0.1']
  }
}

module.exports = nextConfig