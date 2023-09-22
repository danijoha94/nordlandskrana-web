/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/Kontakt",
        destination: "/Contact",
      },
      {
        source: "/Om-oss",
        destination: "/About",
      },
      {
        source: "/Tjenester",
        destination: "/Services",
      },
      {
        source: "/Tjenester/Lastebilkran",
        destination: "/Services/Truckcrane",
      },
      {
        source: "/Tjenester/Mobilkran",
        destination: "/Services/Mobilecrane",
      },
      {
        source: "/Tjenester/Trekkvogn",
        destination: "/Services/Trailer",
      },
    ];
  },
};

module.exports = nextConfig;
