// @ts-check
import withSerwistInit from '@serwist/next';
import { nanoid } from 'nanoid/non-secure';

// You may want to use a more robust revision to cache
// files more efficiently.
// A viable option is `git rev-parse HEAD`.
let revision = nanoid();

const withSerwist = withSerwistInit({
  cacheOnNavigation: true,
  swSrc: 'sw.ts',
  swDest: 'public/sw.js',
  additionalPrecacheEntries: [{ url: '/~offline', revision }],
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withSerwist(nextConfig);
