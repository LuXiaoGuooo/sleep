<template>
    <div class="content">
        <div class="title">热门精选</div>
        <div class="list">
            <template v-for="(item, value, index) in houselist" :key="item.data.houseId">
               <HouseItemV9 
               v-if="item.discoveryContentType === 9" :item-data="item.data"
               @click="itemClick(item.data)"
               />
               <HouseItemV3 
               v-else="item.discoveryContentType === 3" :item-data="item.data"
               @click="itemClick(item.data)"
               />
            </template>
        </div>
    </div>
</template>

<script setup>
import HouseItemV9 from '@/components/house-item-v9/house-item-v9.vue'
import HouseItemV3 from '@/components/house-item-v3/house-item-v3.vue'
import useHomeStore from '@/stores/modules/home'
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const homeStore = useHomeStore()
const { houselist } = storeToRefs(homeStore)

const router = useRouter()
const itemClick = (item) => {
   router.push('/detail/' + item.houseId)
}
</script>

<style lang="less" scoped>
.content{
    padding: 10px 8px;
   
    .title{
        padding: 10px;
        font-size: 22px;
    }

    .list{
        display: flex;
        flex-wrap: wrap;
    }
}
</style>