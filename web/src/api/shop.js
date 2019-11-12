import request from '@/utils/request'

export function fetchList() {
  return request({
    url: '/shop/list',
    method: 'get'
    // params: list
  })
}
