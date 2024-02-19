/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    async headers() {
        return [
            {
                source: '/api',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'application/pdf',
                    },
                ],
            },
        ]
    },
    webpack: (config) => {
        config.resolve.alias.canvas = false;

        return config;
    },
};

export default nextConfig;
