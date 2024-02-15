import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

// 创建路由实例 并传递 `routes` 配置
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 导出
export default router
