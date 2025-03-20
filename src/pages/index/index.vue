<template>
  <view class="index">
    <text>{{ msg }}</text>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import './index.scss'
import { useStore } from '../../stores'
const appStore = useStore('app')
console.log(appStore)
const msg = ref('Hello Taro')
</script>
