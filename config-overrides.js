const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@api': path.resolve(__dirname, 'src/api/src'),
      '@': path.resolve(__dirname, 'src')
    },
  };

  return config;
};