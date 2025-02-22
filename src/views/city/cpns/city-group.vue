<template>
    <div class="city-group">
      <van-index-bar :index-list="indexList">
        <!-- 1.热门 -->
        <van-cell title="热门" />
           <div class="list">
            <template 
           v-for="(city, index) in groupData.hotCities"
           > 
             <div class="city" @click="clickCity(city)">{{ city.cityName }}</div>
            </template>
           </div>

           <!-- 2.索引栏 -->
         <template v-for="(group, index) in groupData.cities">
            <van-index-anchor :index="group.group" />
            <template v-for="(city, indey) in group.cities">
                <van-cell :title="city.cityName" @click="clickCity(city)"/>
            </template>
         </template>
     </van-index-bar>

     
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router';
import useCityStore  from '@/stores/modules/city'

const props = defineProps({
    groupData: {
        type: Object,
        default:() => ({})
    }
})

const indexList = computed(() => {
    const list = props.groupData?.cities?.map(item => item.group) || [];
   list.unshift('#')
   return list;
})

// 点击城市回显
const router = useRouter()
const cityStore = useCityStore()
const clickCity = (city) => {
    cityStore.currentCity = city
    router.back()
}
</script>

<style lang="less" scoped>
.list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
    padding-right: 25px;

    .city{
        width: 70px;
        height: 28px;
        line-height: 28px;
        border-radius: 14px;
        font-size: 12px;
        background-color: #fff4ec;
        text-align: center;
        color: #000;
        margin: 5px 0;
    }
}
</style>