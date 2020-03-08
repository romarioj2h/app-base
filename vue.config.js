module.exports = {
  pluginOptions: {
    quasar: {
      treeShake: true
    },
    cordovaPath: 'src-cordova'
  },

  transpileDependencies: [
    /[\\\/]node_modules[\\\/]quasar[\\\/]/
  ],

  publicPath: '',
  chainWebpack: config => {
      config.module
          .rule("i18n")
          .resourceQuery(/blockType=i18n/)
          .type('javascript/auto')
          .use("i18n")
          .loader("@kazupon/vue-i18n-loader")
          .end();
  }
}
