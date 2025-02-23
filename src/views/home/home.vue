<template>
    <div class="home">  
      <HomeNavBar></HomeNavBar>
      <div class="banner">
        <img src="@/assets/img/home/banner.webp" alt="">
      </div>
      <HomeBoxSearch></HomeBoxSearch>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeBoxSearch from './cpns/home-box-search.vue'

import useHomeStore from '@/stores/modules/home';



// 发送网络请求
const HomeStore = useHomeStore()
HomeStore.fetchHotSuggestsDate()

// 1.热门建议
// const hotSuggests = ref([])
// HYRequest.get({
//   url:'/home/hotSuggests'
// }).then(res => {
//   hotSuggests.value = res.data
// })
// // 2.推荐建议
// const categories = ref([])
// HYRequest.get({
//   url:'/home/categories'
// }).then(res => {
//   categories.value = res.data
// })
</script>

<style lang="less" scoped>
.banner{
  img{
    width: 100%;
  }
}


</style>