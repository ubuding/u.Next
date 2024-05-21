import axios from "axios";
const instance = axios.create({
  baseURL: "/",
  timeout: 60000,
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // message.error("请求错误!");
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    const { data } = response.data;

    // 接口 状态
    const { status } = response;
    if (status === 200) return data;

    // message.error("请求错误!");
    console.error(response);
    return Promise.reject(new Error("请求失败!"));
  },
  function (error) {
    // message.error("响应失败!");
    return Promise.reject(error);
  }
);

export const request = instance;
