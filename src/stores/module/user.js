/**
 *用户信息存储
 */
import { defineStore } from 'pinia'

const USER_STORE_KEY = 'user'
export const useUserStore = defineStore(USER_STORE_KEY, {
  state() {
    return {
      userInfo: null,
      access_token: '32323232332',
    }
  },
  actions: {
    setUserInfo(userInfo) {
      this.userInfo = userInfo
    },
    setAccessToken(access_token) {
      this.access_token = access_token
    },
    clearStore() {
      this.$reset()
    },
  },
  persist: {
    enabled: true, // 开启持久化
  },
})
