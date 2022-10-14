/* eslint-disable */
export const downLoadExcel = (fileName: string, blobData: any, type?: string) => {
  let typeName = 'application/vnd.ms-excel;charset=utf-8';
  if (type === 'pdf') {
    typeName = 'application/pdf;charset=utf-8';
  }
  if (type === 'doc') {
    typeName = 'application/msword;charset=utf-8';
  }
  if (type === 'zip') {
    typeName = 'application/zip;charset=utf-8';
  }

  const blob = new Blob([blobData], { type: typeName });
  const URL = window.URL || window.webkitURL;
  const objectUrl = URL.createObjectURL(blob);
  const a = document.createElement('a');

  interface INavigator {
    msSaveBlob?: unknown
  }
  // 判断是否是ie浏览器
  // if (window.navigator.msSaveBlob) {
  //   // IE浏览器
  //   window.navigator.msSaveBlob(blob, fileName);
  // } else {
      if (typeof a.download === 'undefined') {
        (window as any).location = objectUrl;
      } else {
        // 如果是chrome或者firefox浏览器(支持download属性)
        a.href = objectUrl;
        a.download = `${fileName}.${type || 'xlsx'}`;
        document.body.appendChild(a);
        a.click();
        a.remove();
      }
      // 释放blob对象
      URL.revokeObjectURL(objectUrl);
  // }

}