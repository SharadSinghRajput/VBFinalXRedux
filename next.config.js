const nextConfig = {
  images: {
    domains: ['www.aapkikismat.com', 'www.vinaybajrangi.com', 'images.unsplash.com', 'dolphin-app-8x2ht.ondigitalocean.app', 'aapkikismat.blr1.digitaloceanspaces.com', 'vb.aapkikismat.com'],
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
      {
        source: '/foreign-travel.php',
        destination: '/foreign-settlement.php',
        permanent: true,
      },
      {
        source: '/marriage-astrology/post-marriage-counseling.php',
        destination: '/marriage-astrology/married-life-issues',
        permanent: true,
      },
      {
        source: '/marriage-astrology/pre-marriage-counseling.php',
        destination: '/marriage-astrology/married-life-issues',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
