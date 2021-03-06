/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

  const newsRouter = {
    path: '/news',
    component: Layout,
  redirect: 'noRedirect',
  name: 'news',
  meta: {
    title: '新闻',
    icon: 'chart'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/news/newslist'),
      name: 'newslist',
      meta: {title: '新闻列表', noCache: true}
    }



]
}

export default newsRouter
