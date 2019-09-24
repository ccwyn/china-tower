import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import About from '@/views/about'
import NewDetail from '@/views/new-detail'
import News from '@/views/news'
import Product from '@/views/product'

Vue.use(Router)
const RouterModel = new Router({
  mode:'history',
  base:'/tietavue',
  routes: [
    {
      path: '/',
      redirect: '/index',
      name: 'app',
      component: Index,
      meta:{
        title:'首页'
      }
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      meta:{
        title:'首页'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta:{
        title:'关于我们'
      }
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
      meta:{
        title:'产品与服务'
      }
    },
    {
      path: '/news',
      name: 'news',
      component: News,
      meta:{
        title:'新闻发布'
      }
    },
    {
      path: '/new-detail',
      name: 'newDetail',
      component: NewDetail,
      meta:{
        title:'新闻详情'
      }
    },
  ]
});
RouterModel.beforeEach((to, from, next) => {
     /*路由发生改变修改页面的title */
    if(to.meta.title) {
      document.title = to.meta.title
    }
  next();
});
export default RouterModel
