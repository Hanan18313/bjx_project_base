import { KeyData } from '@/types/common';
/**
 * 删除searchForm数据中undefined或者''的数据项，并对字符串进行左右空格去除
 */
export const deleteSearchFormUndef = (searchForm: KeyData) => {
  if (searchForm) {
    const keys = Object.keys(searchForm);
    const val = Object.create(null);
    keys.forEach((item: string) => {
      if (searchForm[item] !== undefined && String(searchForm[item]).trim() !== '') {
        if (typeof searchForm[item] === 'string') {
          val[item] = searchForm[item].trim();
        } else {
          val[item] = searchForm[item];
        }
      }
    });
    return val;
  }
  return {};
};