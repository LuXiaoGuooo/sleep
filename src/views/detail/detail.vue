<template>
    <div class="detail top-page" >
        <van-nav-bar
       title="房屋详情"
       left-text="旅途"
       left-arrow
       @click-left="onClickLeft"
      />
      <template v-if="mainPart">
        <Swipe :swipe-data="mainPart?.topModule?.housePicture?.housePics"></Swipe>
        <Cpns :infosData="mainPart.topModule"></Cpns>
        <Section :house-facility="mainPart.dynamicModule?.facilityModule?.houseFacility"></Section>
        <Map :position="mainPart?.dynamicModule?.positionModule"></Map>
      </template>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { getDatailInfos } from '@/services'


import Swipe from './cpns/detail_01-swipe.vue'
import Cpns from './cpns/detail_02-infos.vue'
import Section from './cpns/detail_03-section.vue'
import Map from './cpns/detail_07-map.vue'

const route = useRoute()
const router = useRouter()
const houseId = route.params.id


// 发送网络请求
const detailInfos = ref({})
const mainPart = computed(() => detailInfos.value?.mainPart)
getDatailInfos(houseId).then(res => {
    detailInfos.value = res?.data
})

// 监听返回按钮的点击
const onClickLeft = () => {
    router.back()
}   
</script>

<style lang="less" scoped>
</style>