import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  // reactStrictMode: true,
  // output: 'export',
  images: {
    unoptimized: true
  },
  env: {
    siteName: '极核',
    siteURL: 'https://jihe.pro'
  },
};

export default withMDX(config);
