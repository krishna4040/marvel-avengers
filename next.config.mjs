/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'i.annihil.us'
            },
        ]
    }
};

export default nextConfig;
