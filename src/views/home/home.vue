<template>
    <div class="home">  
      <HomeNavBar></HomeNavBar>
      <div class="banner">
        <img src="@/assets/img/home/banner.webp" alt="">
      </div>
      <HomeBoxSearch></HomeBoxSearch>
      <HomeCateGories></HomeCateGories>
        <div class="search" v-if="isShowSearchBar" >
          <SearchBar
      
           ></SearchBar>
        </div>
      <HomeContent />
    </div>
</template>

<script setup>
import { onMounted , onUnmounted, watch,ref, computed } from 'vue'
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeBoxSearch from './cpns/home-box-search.vue'
import HomeCateGories from './cpns/home-categories.vue'
import HomeContent from './cpns/home-content.vue'
import SearchBar from '@/components/search-bar/serach-bar.vue'

import useHomeStore from '@/stores/modules/home';
import useScroll from '@/hooks/useScroll'


// 发送网络请求
const HomeStore = useHomeStore()
HomeStore.fetchHotSuggestsDate()
HomeStore.fetchCategoriesDate()
HomeStore.fetchHouselistDate()


const { isReachBootom, scrollTop } = useScroll()
watch(isReachBootom, (newValue) => {
  if(newValue){
    HomeStore.fetchHouselistDate().then(() => {
      isReachBootom.value = false
    })
  }
})

// 1.显示弹窗的逻辑
// const isSearch = ref('true')
// watch(scrollTop, (newValue) => {
//   isSearch.value = newValue > 100
// })
// 2.利用computed进行优化
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360
})
</script>

<style lang="less" scoped>
.banner{
  img{
    width: 100%;
  }
}
.search{
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  background-color: #fff;
}

</style>