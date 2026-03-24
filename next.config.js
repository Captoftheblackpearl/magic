/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',         
    images: { unoptimized: true },
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true,
    // allowedDevOrigins is for local dev, we can keep it
    allowedDevOrigins: [
        '192.168.1.84'
    ]
};

module.exports = nextConfig;
