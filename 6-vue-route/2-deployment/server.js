// node + express搭建服务器

const express  = require('express')

// 使用 解决history模式下路由请求问题
const history = require('connect-history-api-fallback')

const app = express()
app.use(history())

// 配置静态资源
app.use(express.static(__dirname + '/static'))

app.get('/person', (response, request)=>{
    request.send(
        {
            id: '1212',
            name: 'llf'
        }
    )
})


app.listen(5005, (err)=>{
    if(!err){
        console.log('服务器启动成功！')
    }
})
