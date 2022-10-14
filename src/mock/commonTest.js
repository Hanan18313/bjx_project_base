import mockjs from "mockjs";

const list = [];
const count = 10;

for (let i = 0; i < count; i++) {
  list.push(mockjs.mock({
    id: '@increment',
    firstName: '@first',
    lastName: '@last',
    salary: '@float(8000, 50000, 1, 3)',
    'gender|1': ['boy', 'girl'],
    city: '@city(true)',
    address: '地址'
  }))
}

export default {
  getPersonList: () => {
    return list
  }
};