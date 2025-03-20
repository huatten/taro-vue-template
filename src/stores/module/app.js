/**
 *用户信息存储
 */
import { defineStore } from 'pinia'

const APP_STORE_KEY = 'app'
export const useAppStore = defineStore(APP_STORE_KEY, {
  state() {
    return {
      appInfo: null,
    }
  },
  actions: {
    setAppInfo(appInfo) {
      this.appInfo = appInfo
    },
    clearStore() {
      this.$reset()
    },
  },
  persist: {
    enabled: true, // 开启持久化
  },
})
