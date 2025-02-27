<template>
    <div class="home">  
      <HomeNavBar></HomeNavBar>
      <div class="banner">
        <img src="@/assets/img/home/banner.webp" alt="">
      </div>
      <HomeBoxSearch></HomeBoxSearch>
      <HomeCateGories></HomeCateGories>
      <HomeContent />
    </div>
</template>

<script setup>
import { onMounted , onUnmounted, watch } from 'vue'
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeBoxSearch from './cpns/home-box-search.vue'
import HomeCateGories from './cpns/home-categories.vue'
import HomeContent from './cpns/home-content.vue'

import useHomeStore from '@/stores/modules/home';
import useScroll from '@/hooks/useScroll'


// 发送网络请求
const HomeStore = useHomeStore()
HomeStore.fetchHotSuggestsDate()
HomeStore.fetchCategoriesDate()
HomeStore.fetchHouselistDate()


const { isReachBootom } = useScroll()
watch(isReachBootom, (newValue) => {
  if(newValue){
    HomeStore.fetchHouselistDate().then(() => {
      isReachBootom.value = false
    })
  }
})


</script>

<style lang="less" scoped>
.banner{
  img{
    width: 100%;
  }
}


</style>