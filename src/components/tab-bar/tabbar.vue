<template>
   <div class="tab-bar">
   <van-tabbar v-model="currentIndex" active-color="#ff9645">
    <template v-for="(item, index) in tabbar">
      <van-tabbar-item  :to="item.path">
     <span>{{ item.text }}</span>
     <template #icon>
       <img v-if="currentIndex !== index"  :src="getAssetURL(item.image)" alt="">
       <img v-else :src="getAssetURL(item.imageActive)" alt="">
      </template>
    </van-tabbar-item>
   </template>
   </van-tabbar>

   </div>
</template>

<script setup>

import tabbar from '@/assets/data/tabbar'
import { getAssetURL } from '@/utils/load_assets'
import { ref } from 'vue'
import { useRouter } from 'vue-router'


const currentIndex = ref(0)
const router = useRouter()

const itemClick = (index, item) => {
   currentIndex.value = index
   router.push(item.path)
}

</script>

<style lang="less" scoped>
.tab-bar{
   
   img{
      height: 28px;
   }
}
</style>