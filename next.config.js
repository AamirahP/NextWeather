/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {nextConfig,
    api: {
        bodyParser: {
          sizeLimit: '1mb',
}}}