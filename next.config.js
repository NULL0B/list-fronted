/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
