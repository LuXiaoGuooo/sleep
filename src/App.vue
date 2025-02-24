<template>
    <div class="app">
     <RouterView></RouterView>
     <TabBar v-if="!route.meta.hideTabBar"></TabBar>
    </div>
</template>

<script setup>
import TabBar from '@/components/tab-bar/tabbar.vue'
import { useRoute } from 'vue-router'

const route = useRoute()


</script>

<style lang="less" scoped>
</style>
