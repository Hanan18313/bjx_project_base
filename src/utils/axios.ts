import axios, {
  AxiosRequestConfig, AxiosError, AxiosResponse, HttpStatusCode,
} from 'axios';
import {
  message,
} from 'ant-design-vue';

const instance = axios.create({
  timeout: 60 * 1000,
  withCredentials: true,
});

export const JsonType = 'JSON_TYPE';
export const FormData = 'FORM_DATA';

interface Config extends AxiosRequestConfig {
  type?: string,
  headers?: any
}

if (process.env.NODE_ENV === 'development') {
  instance.defaults.baseURL = '';
} else if (process.env.NODE_ENV === 'production') {
  instance.defaults.baseURL = '';
}

instance.interceptors.request.use((config: Config): Config => {
  const retConfig = config;

  if (retConfig.type === JsonType) {
    retConfig.headers['Content-Type'] = 'application/json';
  }
  if (retConfig.type === FormData) {
    retConfig.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  }
  const token = localStorage.getItem('access_token');
  if (token) {
    retConfig.headers.access_token = token;
  }
  return retConfig;
}, (err: AxiosError) => Promise.reject(err));

instance.interceptors.response.use((respones: AxiosResponse): Promise<AxiosResponse> => {
  if (respones.status === HttpStatusCode.Ok) {
    return Promise.resolve(respones.data);
  }
  return Promise.reject(respones);
}, (error: AxiosError) => {
  if (error.response?.status === HttpStatusCode.Unauthorized) {
    // 401 无权限
    message.error('您暂无权限，请先登录');
  }

  if (error.response?.status === HttpStatusCode.InternalServerError) {
    // 500 服务器出错
    message.error('服务器出错');
  }

  if (error.response?.status === HttpStatusCode.NotFound) {
    // 404
  }
});
