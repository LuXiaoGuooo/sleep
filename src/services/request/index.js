import axios from "axios";

import { base_URL, TIMEOUT } from './config'

class HYRequest {
  
  constructor(baseURL, timeout=1000) {
    this.instance = axios.create({
      baseURL,
      timeout
    });
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
