import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/views/index'
// import About from '@/views/about'
// import NewDetail from '@/views/new-detail'
// import News from '@/views/news'
// import Product from '@/views/product'
const Index = resolve => void(require(['@/views/index'], resolve));
const About = resolve => void(require(['@/views/about'], resolve));
const NewDetail = resolve => void(require(['@/views/new-detail'], resolve));
const News = resolve => void(require(['@/views/news'], resolve));
const Product = resolve => void(require(['@/views/product'], resolve));

// const Index = () => import('@/views/index')
// const About = () => import('@/views/about')
// const NewDetail = () => import('@/views/new-detail')
// const News = () => import('@/views/news')
// const Product = () => import('@/views/product')
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
