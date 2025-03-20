import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { registerStores } from './register'

// 创建pinia实例
export const pinia = createPinia()

// 持久化插件
pinia.use(piniaPluginPersistedstate)

// 注册存储实例
export const storeModules = registerStores(pinia)

export function useStore(key) {
  if (!storeModules[key]) {
    throw new Error(`Store '${key}' has not been registered yet.`)
  }
  return storeModules[key]
}
