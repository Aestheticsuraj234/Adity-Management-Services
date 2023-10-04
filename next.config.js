/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['dummyimage.com']
    },
    experimental:{
        serverActions: true
    }
}

module.exports = nextConfig
