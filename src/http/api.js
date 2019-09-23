import axios from './http.js';

//=========数据接口==========
// 获取首页关于我们
export const getAbout = () => axios.get(`/system/about/get`)
// 新闻列表
export const getOpenList = () => axios.get(`/news/open/list`)
// 首页新闻推荐*
export const getOpenListIndex = () => axios.get(`/news/open/list/index`)
// 新闻详情
export const getNewsDetail = (params) => axios.get(`/news/open/post/${params.cid}`)
