# 路由
- 一组key-value的对应关系
- 路由为了实现SPA(Single page web application)应用
- 数据通过AJAX请求

**路由分类**
- 后端路由：
    - 理解value是function,用于处理客户端提交的请求。e
    - 工作过程：服务器接收到一个请求时，根据请求路径找到匹配的函数来处理请求返回响应数据。
- 前端路由：
    - 理解：value是component,用于展示页面内容。
    - 工作过程：当浏览器的路径改变时，对应的组件就会显示。

## vue-router
- 安装: Vue2使用Vue-router3,Vue3使用Vue-router4
```shell
npm i vue-router@3
```

### 注意点
- pages中存放路由组件
- components中存放一般组件
- 没有显示的组件被销毁

1.路由组件通常存放在pages文片夹，一般组件通常存放在components文件夹。
2.通过切换，“隐藏了的路由组件，默认是被销毁掉的，需要的时候再去挂载。
3.每个组件都有自己的$route属性，里面存储着自己的路由信息
4.整个应用只有一个router,可以通过组件的$router属性获取到。




## 路由守卫(权限)
- 在路由规则时进行权限限制

- 全局路由守卫
    - 全局前置路由守卫
    - 全局后置路由守卫

- 独享路由守卫


## history模式与hash模式
- 路由中的hash值：从/#/开始的所有内容。不会随着HTTP请求发给服务器。只是作为前端路由跳转显示
- 默认开始hash工作模式,更改为history模式，没有/#/
- hash模式兼容性更好


**项目上线**

- 打包：html
```
npm run build
```

- history模式解决404问题：后端人员进行请求过滤
    - Node.js解决方案：connect-history-api-fallback
