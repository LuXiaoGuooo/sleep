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
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeBoxSearch from './cpns/home-box-search.vue'
</script>

<style lang="less" scoped>
.banner{
  img{
    width: 100%;
  }
}


</style>