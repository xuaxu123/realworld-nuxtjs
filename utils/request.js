// 基于 axios 封装的请求模块

import axios from "axios";

const request =axios.create({
    baseURL:'https://api.realworld.io/api'
})

//请求拦截器

//响应拦截器

export default request