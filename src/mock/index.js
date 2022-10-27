import mockjs from 'mockjs';

// 在使用mockJs的情况下 设置withCredentials = true，且未被拦截的跨域请求丢失cookies的问题
mockjs.XHR.prototype.proxy_send = mockjs.XHR.prototype.send;
mockjs.XHR.prototype.send = function() {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false;
  }
  this.proxy_send(...arguments);
};


mockjs.mock(/\/table\/list/,{
  'code': 200,
  'data': {
      'current': 1,
      'pages': 15,
      'size': 10,
      'total': 285,
      'records|10': [{
          "data1|+100000000": 1710518400000,
          "data2|+1": 10,
          "data3": '北京 xx 有限公司',
          "data4|+2": 0,
          "data5": '销售一组',
          "data6": '北京',
          "data7": '月结',
          "data8": '20%',
          "data9": '折扣备注',
          "data10": '备注',
          "data11": '是'
      }]
  },
  'message': '操作成功',
  'success': true
});
