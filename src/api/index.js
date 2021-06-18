import request from '../utils/request'

export function videoList(params) {
  return request({
    url: '/api/v1/videos',
    method: 'get',
    params
  })
}
export function getConfig(params) {
  return request({
    url: '/api/v1/last/configuration',
    method: 'get',
    params
  })
}
export function artworkList(params) {
  return request({
    url: '/api/v1/books',
    method: 'get',
    params
  })
}
export function bookData(data) {
  return request({
    url: `/api/v1/books/${data.id}`,
    method: 'get'
  })
}
export function videoData(data) {
  return request({
    url: `/api/v1/videos/${data.id}`,
    method: 'get'
  })
}