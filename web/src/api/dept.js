import request from '@/utils/request'

// export function fetchList(query) {
//   return request({
//     url: '/article/list',
//     method: 'get',
//     params: query
//   })
// }

export function fetchList(query) {
  return request({
    url: 'http://localhost:8080/dept/list',
    method: 'get',
    params: query
  })
}



