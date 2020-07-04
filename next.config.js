const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

module.exports = nextEnv({
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
});
