/** When your routing table is too long, you can split it into small modules**/



const shopRouter = {
  path: '/index',
  component: () => import('@/views/shop/index'),
  redirect: '/index',
  children: [
    {
      path: '/home',
      component: () => import('@/views/shop/HomePage/Home'),
      name: 'home',
      meta: { title: '商城首页', icon: 'documentation', affix: true }
    },
    {
      path: '/order',
      component: () => import('@/views/shop/OrderPage/Order'),
      name: 'order',
      meta: { title: '我的订单', icon: 'dashboard', affix: true }
    },
    {
      path: '/loginIn',
      component: () => import('@/views/shop/LoginPage/LoginIn'),
      name: 'loginIn',
      meta: { title: '登录/注册', icon: 'dashboard', affix: true }
    },
    {
      path: '/charts',
      component: () => import('@/views/shop/ChartsPage/Charts'),
      name: 'charts',
      meta: { title: '图表', icon: 'dashboard', affix: true }
    },
    {
      path: '/prodetails',
      component: () => import('@/views/shop/DetailPage/ProDetails'),
      name: 'prodetails',
      meta: { title: '商品详情', icon: 'dashboard', affix: true }
    },
    {
      path: '/mycarts',
      component: () => import('@/views/shop/CartsPage/Carts'),
      name: 'mycarts',
      meta: { title: '我的购物车', icon: 'dashboard', affix: true }
    }
  ]
}

export default shopRouter
