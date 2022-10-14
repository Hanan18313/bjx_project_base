const { defineConfig } = require('@vue/cli-service');
const WebpackBar = require('webpackbar');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#1DA57A',
          },
          javascriptEnabled: true
        }
      }
    }
  },
  // configureWebpack: {
  //   plugins: [
  //     new WebpackBar({
  //       name: 'bjx_project'
  //     })
  //   ]
  // }
});
