// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import Vue from 'vue'

// 引入组件 : 路由组件
import Home from '../pages/Home' 
import About from '../pages/About'
import News from '../pages/News.vue' 
import Message from '../pages/Message.vue' 
import Detail from '../pages/Detail.vue'

// 这个应该先引入
Vue.use(VueRouter)

// 创建并暴露路由器
export default new VueRouter({
    routes:[
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children:[
                {
                    // path: '/home/news', 
                    path: 'news', // 不用写/
                    component: News
                },
                {
                    path: '/home/message', // 这个也没有问题
                    component: Message,
                    children:[
                        {
                            path:'detail',
                            component: Detail
                        }
                    ]
                }
            ] 
        },
       
    ]
})

