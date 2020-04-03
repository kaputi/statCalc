module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['./'],
          alias: {
            src: './src',
            components: './src/components',
            containers: './src/containers',
            utils: './src/utils',
          },
        },
      ],
    ],
  }
}
