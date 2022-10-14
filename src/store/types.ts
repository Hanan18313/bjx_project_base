import { ICommonState } from '@/store/modules/common/types';
import { IUserState } from './modules/user/types';

export interface IRootState {
  common: ICommonState,
  user: IUserState
}