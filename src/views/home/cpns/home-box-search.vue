<template>
    <div class="home-search">
        <div class="location">
         <div class="city" @click="ClickCity">广州</div>
        <div class="position" @click="clickPosition">
         <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>

      </div>
    </div>
</template>

<script setup>

import { useRouter } from 'vue-router'
const router = useRouter()
const ClickCity = () => {
    router.push('./city')
}

const clickPosition = () => {
    navigator.geolocation.getCurrentPosition(res => {
        console.log("获取位置成功：", res)
    }, err => {
        console.log("获取位置失败：", err)
    }, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    })
}
</script>

<style lang="less" scoped>
.location{
        .text{
         
            font-size: 12px;
        }

        display: flex;
        align-items: center;
        height: 44px;
        padding: 0 20px;

        .city{
            flex: 1;
            color: #333;
            font-size: 14px;

        }

        .position{
            width: 74px;

            img{
                margin-left: 5px;
                height: 18px;
                width: 18px;
            }
        }
    }
</style>