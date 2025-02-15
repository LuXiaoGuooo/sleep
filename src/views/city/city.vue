<template>
    <div class="city top-page" >
        <van-search
          v-model="searchValue" 
          placeholder="关键词/位置/民宿" 
          shape="round"
          show-action
          @cancel='cancelClick'
          />
          <van-tabs v-model:active="activeTab" color="var(--primary-color)">
              <van-tab title="国内·港澳台">

              </van-tab>
             <van-tab title="海外">

             </van-tab>
           </van-tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getCityAll } from '@/services/index'

const router = useRouter()

// 1.搜索框功能
const searchValue = ref('')
const cancelClick = () => {
    router.back()
}

// 2.标签页功能
const activeTab = ref()

// 网络请求
// HYRequest.get({
//     url: '/city/all'
// }).then(res => {
//     console.log(res)
// })
getCityAll().then(res => {
    console.log(res)
})
</script>

<style lang="less" scoped>

</style>