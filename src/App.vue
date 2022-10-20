<template>
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
</template>

<script lang="ts">
import { ConfigProvider } from 'ant-design-vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: '',
  components: {
    ConfigProvider,
  },
});

console.log(22222);
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
