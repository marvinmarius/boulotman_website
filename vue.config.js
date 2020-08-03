module.exports = {
  "transpileDependencies": [
    "vuetify",
    "vue-tel-input-vuetify"
  ],

  devServer: {
   proxy: 'http://192.168.102.114:8000',
   //proxy: 'http://84b50d9d8258.ngrok.io'

  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
