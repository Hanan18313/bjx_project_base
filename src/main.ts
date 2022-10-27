import { createApp, ComponentPublicInstance } from 'vue';
import antd from 'ant-design-vue';
import App from './App';
import router from './router';
import store, { key } from './store';
import './antd.less';
import './mock';

const app = createApp(App);

app.config.errorHandler = (err: unknown, instance: ComponentPublicInstance | null, info: string): void => {
  console.log('errrrrrrrrrrrrrrrrrrrrrrr');
  console.log(err);
  console.log(instance);
  console.log(info);
};

app.use(store, key).use(router).use(antd)
.mount('#app');
