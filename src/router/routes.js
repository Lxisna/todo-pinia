// const Item = () => import('../../src/components/Item.vue')
const HomePage = () => import('../../src/pages/HomePage.vue')
const EditPage = () => import('../../src/pages/EditPage.vue')

let routes = [
  {
    name: 'HomePage',
    path: '/',
    //使用import可以路由懒加载，如果不使用，太多组件一起加载会造成白屏
    component: HomePage
  },
  {
    name: 'EditPage',
    path: '/itemedit/:id',
    component: EditPage
  }
  // {
  //     // Page 404
  //     name: '404',
  //     path: '/:catchAll(.*)',
  //     component: () => import(''),
  // }
]

export default routes
