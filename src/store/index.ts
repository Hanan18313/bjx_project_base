import { InjectionKey } from 'vue';
import {
  createStore,
  createLogger,
  Store,
} from 'vuex';
import { IRootState } from './types';

const debug = process.env.NODE_ENV === 'development';
const plugins = debug ? [createLogger({})] : [];

const modules: Record<string, any> = {};
const requireModules = require.context('./modules/', true, /index\.(js|ts)$/iu);
requireModules.keys().forEach((filePath: string) => {
  const modular = requireModules(filePath);
  const name = filePath.replace(/\.\/|\/index.(js|ts)/g, '');
  modules[name] = {
    namespaced: true,
    ...modular[name],
  };
});

export const key: InjectionKey<Store<IRootState>> = Symbol('');

const store = createStore<IRootState>({
  plugins,
  strict: process.env.NODE_ENV === 'development',
  modules: {
    ...modules,
  },
});

export default store;