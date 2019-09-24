// 引用axios
import axios from 'axios';
// axios 公共配置

axios.defaults.withCredentials=true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL= process.env.NODE_ENV === 'development'?`/api`:process.env.API_ROOT,
// http request 拦截器
axios.interceptors.request.use(
  config => {

    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if(response.status===200)
    return response.data;
  },
  error => {
    if (error.response) {

    }
    return Promise.reject(error.response.data)
  });

export default axios;
