const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withSass = require('@zeit/next-sass')
const withVideos = require('next-videos')
// const webpack = require('webpack')
const path = require('path')

module.exports = withPlugins([[withSass], [withImages], [withVideos]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./'))
    return config
  },
})

// module.exports = withImages({
//   webpack(config, options) {
//     config.resolve.modules.push(path.resolve('./'))
//     return config
//   },
// })
