import mockjs from 'mockjs';
import commonTest from './commonTest';

// 在使用mockJs的情况下 设置withCredentials = true，且未被拦截的kua'yu请求丢失cookies的问题
mockjs.XHR.prototype.proxy_send = mockjs.XHR.prototype.send;
mockjs.XHR.prototype.send = function() {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false;
  }
  this.proxy_send(...arguments);
};


mockjs.mock(/\/common\/index/, 'get', commonTest.getPersonList);