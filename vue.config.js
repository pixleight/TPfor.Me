const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  pwa: {
    themeColor: '#f9aa33',
    msTileColor: '#1d333e',
    manifestOptions: {
      background_color: '#1d333e'
    }
  },

  configureWebpack: () => {
    return {
      plugins: [
        new PrerenderSPAPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, 'dist'),
          // List of routes to prerender
          [
            '/',
          ],
          {
            //options
          }
        ),
      ]
    }
  }
}