import { InjectionKey } from 'vue';
import {
  createStore,
  createLogger,
  Store,
} from 'vuex';
import { IRootState } from './types';

const debug = process.env.NODE_ENV === 'development';
const plugins = debug ? [createLogger({})] : [];

const modulesMap: Record<string, any> = {};
const requireModules = require.context('./modules/', true, /index\.(js|ts)$/iu);
requireModules.keys().forEach((filePath: string) => {
  const modular = requireModules(filePath);
  const name = filePath.replace(/\.\/|\/index.(js|ts)/g, '');
  modulesMap[name] = {
    namespaced: true,
    ...modular[name],
  };
});

export const key: InjectionKey<Store<IRootState>> = Symbol('');
export const modules = modulesMap;

const store = createStore<IRootState>({
  plugins,
  strict: process.env.NODE_ENV === 'development',
  modules: {
    ...modulesMap,
  },
});

export default store;