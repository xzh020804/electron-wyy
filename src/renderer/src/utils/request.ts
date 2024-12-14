import { useUserStore } from '@renderer/store'
import axios, { Method } from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true
})

const store = useUserStore()
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // config.params = {
    //   ...config.params,
    //   timestamp:Date.now()
    // }
    if(store.token){
      config.params.cookie = store.token
    }
    config.params.timestamp=Date.now()
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)
export default instance


export const request = (
  url:string,
  method: Method = 'get',
  submitInfo?: object
) => {
  return instance.request({
    url,
    method,
    [method.toUpperCase() === 'GET' ? 'params' : 'data'] :submitInfo
  })
}





