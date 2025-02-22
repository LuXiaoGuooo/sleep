<template>
    <div class="city top-page" >
        <div class="top">
            <van-search
          v-model="searchValue" 
          placeholder="关键词/位置/民宿" 
          shape="round"
          show-action
          @cancel='cancelClick'
          />    
          <van-tabs v-model:active="activeTab" color="var(--primary-color)">
            <template v-for="(value, key, index) in allCities" :key="key">
                <van-tab :title="value.title" :name="key"></van-tab>
            </template>
           </van-tabs>
        </div>
        <div class="content">
            <city-group :groupData="currentGroup"/>
            <template v-for="(value, key, index) in allCities">
                <city-group v-show=" activeTab === key " :groupData="currentGroup"/>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import useCityStore  from '@/stores/modules/city'
import { storeToRefs } from 'pinia'
import cityGroup from './cpns/city-group.vue'

const router = useRouter()

// 1.搜索框功能
const searchValue = ref('')
const cancelClick = () => {
    router.back()
}

// 2.标签页功能
const activeTab = ref()
// 从store中获取数据
const cityStore = useCityStore()
cityStore.fetchALLCitiesData()
const { allCities } = storeToRefs(cityStore)

// 3.获取选中标签后的数据
const currentGroup =computed(() => allCities.value[activeTab.value])


</script>

<style lang="less" scoped>
.top{
    position: relative;
    z-index: 10;
}
.content{
    height: calc(100vh - 98px);
    overflow-y: auto;
}
</style>