/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dilfoods.in',
                port: '',
                pathname: '/wp-content/uploads/2023/04/**',
            },
            {
                protocol: 'https',
                hostname: 'images.freeimages.com',
                port: '',
                pathname: '/images/large-previews/**',
            },
            
            {
                protocol: 'https',
                hostname: 'media.istockphoto.com',
                port: '',
                pathname: '/id/**',
            },
        ],
    },
}

module.exports = nextConfig
