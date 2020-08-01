const env = process.env.ENV || 'development';

const configs = {
  development: {
    API: 'http://localhost:3000',
  },
  staging: {
    API: 'https://dev.wingpen.name',
  },
  production: {
    API: 'https://prod.wingpen.name',
    CANONICAL: 'https://chapterwing.com',
  },
}[env];

module.exports = configs;
