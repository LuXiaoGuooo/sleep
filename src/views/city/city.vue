<template>
    <div class="city top-page" >
        <div class="top">
            <van-search
          v-model="searchValue" 
          placeholder="关键词/位置/民宿" 
          shape="round"
          show-action
          @cancel='cancelClick'
          />    
          <van-tabs v-model:active="activeTab" color="var(--primary-color)">
            <template v-for="(value, key, index) in allCities" :key="key">
                <van-tab :title="value.title"></van-tab>
            </template>
           </van-tabs>
        </div>


        <div class="content">
            <template v-for="item in 100">
                <h2>{{ item }}</h2>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useCityStore  from '@/stores/modules/city'
import { storeToRefs } from 'pinia'

const router = useRouter()

// 1.搜索框功能
const searchValue = ref('')
const cancelClick = () => {
    router.back()
}

// 2.标签页功能
const activeTab = ref()
// 从store中获取数据
const cityStore = useCityStore()
cityStore.fetchALLCitiesData()
const { allCities } = storeToRefs(cityStore)

/*
这个位置发送网络请求有两个缺点
1.如果网络请求太多，那么页面组件就包含大量的对于网络请求和数据的处理逻辑
2，如果页面封装了很多子组件，子组件需要这些数据，我们必须一步步将数据传递过去（props）
*/
// getCityAll().then(res => {
//     console.log(res)
// })


</script>

<style lang="less" scoped>
.content{
    height: calc(100vh - 98px);
    overflow-y: auto;
}
</style>