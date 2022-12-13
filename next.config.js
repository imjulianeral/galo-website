const webpack = require('webpack')
const path = require('path')

module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./'))
    return config
  },
}
