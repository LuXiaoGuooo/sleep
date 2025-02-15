<template>
    <div class="city top-page" >
        <van-search
          v-model="searchValue" 
          placeholder="关键词/位置/民宿" 
          shape="round"
          show-action
          @cancel='cancelClick'
          />

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const cancelClick = () => {
    router.back()
}

// 搜索框功能
const searchValue = ref('')
</script>

<style lang="less" scoped>

</style>