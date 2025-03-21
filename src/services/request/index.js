import axios from "axios";

import { base_URL, TIMEOUT } from './config'
// 1.添加发送网络请求显示loading的逻辑

import useMainStore from "@/stores/modules/main";
const mainStore = useMainStore()

class HYRequest {
  
  constructor(baseURL, timeout=1000) {
    this.instance = axios.create({
      baseURL,
      timeout
    });

    this.instance.interceptors.request.use(config => {
      mainStore.isloading = true
      return config
    }, err => {
      return err
    })
    this.instance.interceptors.response.use(res => {
      mainStore.isloading = false
      return res
    }, err => {
      return err
    })
  }


  // 发送请求的方法
  request(config) {
   return new Promise((resolove, reject) => {
    this.instance.request(config).then(res => {
        resolove(res.data)
    }).catch(err => {
        reject(err)
    })
   })
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

export default new HYRequest(base_URL, TIMEOUT);