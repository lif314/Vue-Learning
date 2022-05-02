const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // vue-cli配置代理服务器: 端口号与ajax请求端口保持一致

  // 方式1
  // devServer: {
  //   // 不能配置多个代理
  //   // 不能灵活控制是否走代理
  //   proxy: 'http://localhost:5000'
  // }
  
  // 方式2
  devServer: { 
    proxy: {
      '/api': { // 请求前缀 是该前缀则走代理
        target: 'http://localhost:5000',
        pathRewrite:{'^/api':''}, // 重写路径
        ws: true,  // 用于支持websocket
        changeOrigin: true  // 8080 --代理8080 -- 真实5000, true说谎，来自5000； false来自8080
        // 用于控制请求头中的host
      },
      '/demo': { // 请求前缀 是该前缀则走代理
        target: 'http://localhost:5001',
        pathRewrite:{'^/demo':''}, // 重写路径
        ws: true,  // 用于支持websocket
        changeOrigin: true  // 8080 --代理8080 -- 真实5000, true说谎，来自5000； false来自8080
        // 用于控制请求头中的host
      }
    }
  }
})
