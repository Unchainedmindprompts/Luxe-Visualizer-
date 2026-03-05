import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ["@mdx-js/react"],
  },
  async headers() {
    return [
      {
        source: '/:path*.(jpg|jpeg|png|gif|webp|avif|svg|ico|woff|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/llms.txt',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
      {
        source: '/agent.json',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // Redirect non-www to www (permanent 301)
      {
        source: "/:path*",
        has: [{ type: "host", value: "inwbasecamp.com" }],
        destination: "https://www.inwbasecamp.com/:path*",
        permanent: true,
      },
      // WordPress legacy URL redirect
      {
        source: "/2025/02/20/inland-northwest-geographic-jackpot/",
        destination: "/articles/geographic-jackpot",
        permanent: true,
      },
      // Redirect /blog to /articles
      {
        source: "/blog",
        destination: "/articles",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
