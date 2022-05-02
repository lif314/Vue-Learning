# Vue发送和接受请求
- xhr
- jQuery $.get,$.post
- axios: 推荐
- fetch: 原生的 promise风格, 兼容性

## 使用axios
- install
```shell
npm i axios
```



## AJAX跨域问题
- cors: 在服务器上配置响应头(后端人员)
- jsonp 只能解决get请求，很巧妙
- 配置代理服务器
    - 服务器之间传输数据不使用ajax，两个服务器之间传输数据使用http，不涉及跨域问题
- vue-cli开启代理服务器
vue.config.js中

- 配置单个代理
```js
  // vue-cli配置代理服务器: 端口号与ajax请求端口保持一致
  devServer:{
    proxy: 'http://localhost:5000'
```

- 配置多代理
    - 需要加前缀
```js
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
  ```


## vue-resource库 发送AJAX请求
- 安装
```shell
npm i resource
```
- 引入：使用默认暴露，对xhr的封装
```js
// 引入插件
import vueResource from 'vue-resource'
// 使用插件
Vue.use(vueResource)  // 绑定在vm和vc上
```

- 使用：与axios一样
```js
this.$http.get('url')    
axios.get('url')
```
