/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'i.annihil.us'
            },
            {
                protocol : "https",
                hostname : "img.freepik.com"
            }
        ]
    }
};

export default nextConfig;
