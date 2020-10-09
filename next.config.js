const withPlugins = require('next-compose-plugins')
// const withImages = require('next-images')
const withSass = require('@zeit/next-sass')
const withVideos = require('next-videos')
const optimizedImages = require('next-optimized-images')
const path = require('path')

module.exports = withPlugins(
  [
    [withSass],
    [withVideos],
    [
      optimizedImages,
      {
        handleImages: ['jpeg', 'png', 'svg', 'webp'],
        removeOriginalExtension: true,
        optimizeImages: true,
        optimizeImagesInDev: false,
        webp: {
          preset: 'default',
          quality: 85,
        },
      },
    ],
  ],
  {
    webpack(config, options) {
      config.resolve.modules.push(path.resolve('./'))
      return config
    },
  }
)
