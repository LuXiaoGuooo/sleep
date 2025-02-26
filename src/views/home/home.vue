<template>
    <div class="home">  
      <HomeNavBar></HomeNavBar>
      <div class="banner">
        <img src="@/assets/img/home/banner.webp" alt="">
      </div>
      <HomeBoxSearch></HomeBoxSearch>
      <HomeCateGories></HomeCateGories>
      <button @click="moveClick">刷新</button>
      <HomeContent />
    </div>
</template>

<script setup>

import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeBoxSearch from './cpns/home-box-search.vue'
import HomeCateGories from './cpns/home-categories.vue'
import HomeContent from './cpns/home-content.vue'

import useHomeStore from '@/stores/modules/home';


// 发送网络请求
const HomeStore = useHomeStore()
HomeStore.fetchHotSuggestsDate()
HomeStore.fetchCategoriesDate()

HomeStore.fetchHouselistDate()

// 刷新
const moveClick = () => {
  console.log("一次刷新")
  HomeStore.fetchHouselistDate()
}
</script>

<style lang="less" scoped>
.banner{
  img{
    width: 100%;
  }
}


</style>