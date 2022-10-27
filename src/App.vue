<!-- <template>
  <ConfigProvider :theme-vars="{ blue: '#6476FF', navBarArrowSize: '1.4rem' }">
    <Suspense>
      <template #default>
        <router-view v-slot="{ Component, route }">
          <keep-alive>
            <component
              v-if="route.meta && route.meta.keepAlive"
              :is="Component"
              :key="route.meta.usePathKey ? route.fullPath : undefined"
            />
          </keep-alive>
          <component
            v-if="!(route.meta && route.meta.keepAlive)"
            :is="Component"
            :key="route.meta.usePathKey ? route.fullPath : undefined"
          />
        </router-view>
      </template>
      <template #fallback>
        <div style="height: 600px; background: blue;"></div>
      </template>
    </Suspense>
  </ConfigProvider>
</template> -->
<template>
  <div>
    <a-button>刷新</a-button>
    <h1 v-if="error">load async component error</h1>
    <Suspense v-else>
      <template #default>
        <router-view />
      </template>
      <template #fallback>
        <div class="loading"></div>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
// import { ConfigProvider } from 'ant-design-vue';
import { defineComponent, onErrorCaptured, ref } from 'vue';

export default defineComponent({
  name: '',
  // components: {
  //   ConfigProvider,
  // },
  setup() {
    const error = ref(null);
    onErrorCaptured((e: any) => {
      console.log(e);
      error.value = e;
      return false;
    });
    return {
      error,
    };
  },
});

</script>

<style>
#app {
  height: 100%;
}
.section {
  height: 100%;
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
