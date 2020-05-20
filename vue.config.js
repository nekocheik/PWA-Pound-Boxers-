module.exports = {
  pwa: {
    name: 'Spartacus',
    themeColor: '#235789',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#C1292E',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/sw.js'
    }
  }
}
