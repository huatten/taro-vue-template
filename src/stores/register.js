// 注册引入不同模块
import { useAppStore } from './module/app'
import { useUserStore } from './module/user'

export const registerStores = (pinia) => {
  return {
    app: useAppStore(pinia),
    user: useUserStore(pinia),
  }
}
