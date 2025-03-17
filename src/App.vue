<template>
    <div class="app">
     <RouterView></RouterView>
     <TabBar v-if="!route.meta.hideTabBar"></TabBar>
    <Loading></Loading>
    </div>
</template>

<script setup>
import TabBar from '@/components/tab-bar/tabbar.vue'
import Loading from '@/components/loading/index.vue'
import { useRoute } from 'vue-router'

const route = useRoute()


</script>

<style lang="less" scoped>

</style>
