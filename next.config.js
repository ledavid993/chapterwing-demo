const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');
const configs = require('./env_config.js');

dotenvLoad();

const withNextEnv = nextEnv();

const env = process.env.ENV || 'development';

module.exports = withNextEnv({
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  publicRuntimeConfig: {
    API: configs.API,
  },
});
