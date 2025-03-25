<template>
  <view class="index">
    <nut-button>{{ msg }}</nut-button>
  </view>
</template>

<script setup>
import './index.scss'
import { useStore } from '@/stores'
const appStore = useStore('app')
console.log(appStore)
const msg = ref('Hello Taro')
</script>
