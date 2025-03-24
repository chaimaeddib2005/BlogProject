const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    client: {
      webSocketURL: 'wss://0.0.0.0/ws',
    }
  }
};

