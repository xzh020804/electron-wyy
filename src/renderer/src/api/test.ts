import {request} from '@renderer/utils/request'

export const test = (params) =>
  request('/search', 'GET' , params)

