import request from '@/utils/request'

export function fetchList() {
  return request({
    url: '/shop/list',
    method: 'get'
    // params: list
  })
}
//订单的接口
export function fetchOrderList() {
  return request({
    url: '/shop/order/list',
    method: 'get'
  })
}
export function fetchUserAddress() {
  return request({
    url: '/shop/user/address',
    method: 'get'
  })
}
export function queryUser() {
  return request({
    url: '/shop/user/infos',
    method: 'post'
  })
}
