<template>
    <div class="map">
        <Section title="百度地图" moreText="更多地图">
            <div class="baidu" ref="mapRef"  
            style='width: 100%; height: 250px;'
           >

            </div>
        </Section>
    </div>
</template>

<script setup>
import Section from '@/components/house-section/index.vue'
import { onMounted, ref } from 'vue'

const mapRef = ref()
const props = defineProps({
    position:{
        type: Object,
        default:() => ({})
    }
})

onMounted(() => {
    var map = new BMapGL.Map(mapRef.value);          // 创建地图实例 
    var point = new BMapGL.Point(props.position.longitude, props.position.latitude);  // 创建点坐标 
    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
    var marker = new BMapGL.Marker(point);  
    map.addOverlay(marker);  
})
</script>

<style lang="less" scoped>
</style>