import Mock from 'mockjs'

const List = []
const count = 100
/*
* 以下为我的订单页面涉及接口数据
* */
const orderList = []// 订单列表模拟数据
const userAddress = []// 用户的常用地址
const userinfoList = []// 用户的个人信息
// 订单列表
for (let i = 0; i < 10; i++) {
  orderList.push(Mock.mock({
    id: '@id',
    userid: '@id',
    ordertime: '@datetime', // 订单生成时间
    proname: '@ctitle(5, 20)', // 订单产品名称
    'proprice|1-900.2': 1, // 订单产品价格
    'proaccount|1-10': 1, // 订单产品数量
    'status|1': ['已完成', '待付款', '待确认收货', '待发货'],
    orderuser: '@cname', // 用户名称
    'usertel': /^1[385][1-9]\d{8}/, // 用户手机
    'userimage': Mock.Random.image('200x200', '#50B347', '#FFF', 'Mock.js'),
    'useraddress': '@province' + '@city' + '@county'
  }))
}
// 用户地址
for (let i = 0; i < 6; i++) {
  userAddress.push(Mock.mock({
    userid: '@id',
    'addressId': '@id',
    'userName': '@cname',
    'streetName': '@ctitle',
    'province': '@province',
    'city': '@city',
    'county': '@county',
    'postCode': '100001',
    'tel': /^1[385][1-9]\d{8}/,
    'isDefault|1': [true, false],
    'useraddress': '@province' + ' ' + '@city' + ' ' + '@county'
  }))
}
// 用户信息
userinfoList.push({ 'userid': 'lixiaoshuang', 'username': 'saturn', 'userphone': '137212312312', 'userimg': 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png' })

List.push(['product', '2016', '2017', '2018', '2019'])
List.push(['手机卡', Mock.mock('@float(1300, 1450, 3, 1)'), Mock.mock('@float(1400, 1550, 3, 1)'), Mock.mock('@float(1600, 1700, 3, 1)'), Mock.mock('@float(1600, 1750, 3, 1)')]),
List.push(['宽带', Mock.mock('@float(60, 75, 3, 1)'), Mock.mock('@float(70, 85, 3, 1)'), Mock.mock('@float(80, 95, 3, 1)'), Mock.mock('@float(90, 105, 3, 1)')]),
List.push(['手机', Mock.mock('@float(70, 85, 3, 1)'), Mock.mock('@float(80, 95, 3, 1)'), Mock.mock('@float(90, 105, 3, 1)'), Mock.mock('@float(100, 115, 3, 1)')])
// console.log(List)

export default [
  {
    url: '/shop/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: List.length,
          items: List
        }
      }
    }
  },
  /*
  订单列表
  * */
  {
    url: '/shop/order/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: orderList.length,
          items: orderList
        }
      }
    }
  },
  {
    url: '/shop/user/address',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: userAddress.length,
          items: userAddress
        }
      }
    }
  },
  {
    url: '/shop/user/infos',
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: {
          total: userinfoList.length,
          items: userinfoList
        }
      }
    }
  }
]

