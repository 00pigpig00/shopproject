import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    // url:'http://localhost:8080/user/loginq',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
