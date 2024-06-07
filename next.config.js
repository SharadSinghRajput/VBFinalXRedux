const nextConfig = {
  images: {
    domains: ['www.aapkikismat.com', 'www.vinaybajrangi.com', 'images.unsplash.com', 'dolphin-app-8x2ht.ondigitalocean.app',],
  },
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/property/buying-selling-property.php',
        destination: '/property.php',
        permanent: true,
      },
      {
        source: '/health-astrology/medical-astrology.php',
        destination: '/health-astrology.php',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
