/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com'],
    },
    webpack: function (config, options) {
        config.experiments = {
            asyncWebAssembly: true,
            layers: true,
        }
        return config;
    },
};

export default nextConfig;
