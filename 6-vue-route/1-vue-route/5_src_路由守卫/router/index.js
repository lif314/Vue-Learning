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
const router =  new VueRouter({
    routes:[
        {
            name: 'guanyu', // 路由命名
            path: '/about',
            component: About,
            meta:{
                title: '关于',
                isAuth: true
            }
        },
        {
            name:'zhuye',
            path: '/home',
            component: Home,
            meta:{
                title: '主页'
            },
            children:[
                {
                    name: 'news',
                    // path: '/home/news', 
                    path: 'news', // 不用写/
                    component: News,
                    meta:{
                        title: '新闻',
                        isAuth: true, // meta中可以自己定义一些数据
                    },
                    // 独享路由守卫--针对某个路由
                    // beforeEnter(to, from,next){
                    //     if(localStorage.getItem('school') === 'llf'){
                    //         next()
                    //         // next放行
                    //     }else{
                    //         alert('school错误')
                    //     }
                    // }
                },
                {
                    path: '/home/message', // 这个也没有问题
                    component: Message,
                    meta:{
                        title: '消息',
                        isAuth: true, // meta中可以自己定义一些数据
                    },
                    children:[
                        {
                            name: 'xiangqing',
                            path:'detail/:id/:title',  // params参数传递配置,占位符
                            component: Detail,
                            // props的第一种写法：值为对象，该对象中所有的Key-value都以props的形式传给Detail组件
                           // 只能传递死数据
                            // props:{
                            //     a: 1,
                            //     b: 'hello'
                            // }

                            // prop第二种写法：值为布尔值，若布尔值为真，就会把该路由组件收到的所有prams参数，
                            // 以props的形式传给Detail组件
                            // props: true  // 只能使用params参数，就必须占位

                            // props第三种写法：值为函数，就靠返回值了
                            props($route){  // 最强大的方式
                                // 可以传值
                                return {
                                    id:$route.query.id,
                                    title: $route.query.title}
                            }
                            
                            // 解构赋值的连续写法：语义化不明确
                            // props({query:{id, title}}){
                            //     // 可以传值
                            //     return {id,title}
                            // }
                        }
                    ]
                }
            ] 
        },
       
    ]
})

// 添加路由守卫: 全局前置路由守卫
// 每次路由切换之前调用
// router.beforeEach((to, from, next)=>{
//     // console.log('切换路由调用to', to)
//     // console.log('切换路由调用from', from)
//      // Home和About随便看，其余需要权限认证
//     //  to.name
//     if(to.meta.isAuth){  //判断是否需要鉴权
//         if(to.path == '/home/news' | to.path === '/home/message'){
//             if(localStorage.getItem('school') === 'llf'){
//                 next()
//                 // next放行
//            }else{
//                alert('school错误')
//            }
//         }
//     }else{
//         next()
//     }  
// })



// 全局后置路由守卫: 初始化的时候调用，每次路由切换之后被调用
// router.afterEach((to, from)=>{
//     // console.log(to, from)
//     // 操作DOM了
//     document.title = to.meta.title || '小济智家'

// })



export default router