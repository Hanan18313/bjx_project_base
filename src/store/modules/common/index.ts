import { ActionTree, Module, MutationTree } from 'vuex';
import { IRootState } from '@/store/types';
import { ICommonState } from './types';

const state: ICommonState = {
  commonName: 'commonName',
};

const mutations: MutationTree<ICommonState> = {
  setCommonName(state: ICommonState, payload: string) {
    state.commonName = payload;
  },
};
const actions: ActionTree<ICommonState, IRootState> = {};

export const common: Module<ICommonState, IRootState> = {
  state,
  mutations,
  actions,
};