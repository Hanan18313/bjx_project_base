import { ConfigProvider } from 'ant-design-vue';
import { defineComponent, KeepAlive, Suspense } from 'vue';
import { RouterView } from 'vue-router';

export default defineComponent({
  name: '',
  setup() {
    return () => (
      <ConfigProvider
        theme-vars={{ blue: '#6476FF', navBarArrowSize: '1.4rem' }}
      >
        <Suspense onFallback={() => <div> loading...</div>}>
          <RouterView>
            {

              ({ Component, route }: any) => {
                const { meta } = route;
                const isKeepAlive = meta && meta.keepAlive;
                return (
                  <>
                    <KeepAlive>
                      {isKeepAlive ? (
                        <Component
                          key={meta.usePathKey ? route.fullPath : undefined}
                        />
                      ) : null}
                    </KeepAlive>
                    {!isKeepAlive ? (
                      <Component
                        key={meta.usePathKey ? route.fullPath : undefined}
                      />
                    ) : null}
                  </>
                );
              }
            }
          </RouterView>
        </Suspense>
      </ConfigProvider>
    );
  },
});
