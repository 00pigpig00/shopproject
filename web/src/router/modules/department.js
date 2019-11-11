import Layout from '@/layout'

const deptRouter = {
  path: '/dept',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Dept',
  meta: {
    title: '部门管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/dept/DeptList'),
      name: 'deptlist',
      meta: { title: '部门列表', noCache: true }
    },
    {
      path: 'chart',
      component: () => import('@/views/dept/DeptChart'),
      name: 'deptChart',
      meta: { title: '部门图表', noCache: true }
    }
  ]
}

export default deptRouter
