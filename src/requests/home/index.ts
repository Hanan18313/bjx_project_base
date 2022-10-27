import { Axios } from '@/utils/axios';

export const getTableList = () => Axios.post('/table/list');