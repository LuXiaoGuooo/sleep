<template>
    <div class="cate">
        <template v-for="(item, index) in categories" :key="item.id">
            <div class="item">
                <img :src=item.pictureUrl alt="">
               <div class="text">{{ item.title }}</div>
            </div>
        </template>
    </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const {  categories } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.cate{
    margin-top: 10px;
    display: flex;
    overflow-x: auto;
    height: 60px;
    scrollbar-width: none;

    .item{
        width: 70px;
        flex-shrink: 0;
        text-align: center;
        justify-items: center;
        align-items: center;


        img{
            width: 32px;
            height: 32px;
        }

        .text{
            font-size: 12px;
        }
    }
}
</style>