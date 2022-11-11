import { ActionTree, Module, MutationTree } from 'vuex';
import { IRootState } from '@/store/types';
import { IUserState } from './types';

const state: IUserState = {
  avatar: '',
  userName: '',
  phone: '',
  roles: 0,
};

const mutations: MutationTree<IUserState> = {};

const actions: ActionTree<IUserState, IRootState> = {};

export const user: Module<IUserState, IRootState> = {
  state,
  actions,
  mutations,
};