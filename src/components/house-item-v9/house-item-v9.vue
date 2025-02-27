<template>
    <div class="house-item">
        <div class="item-inner">
            <!-- 1.图片 -->
            <div class="cover">
                <img :src="itemData.image.url" alt="">
            </div>
            <!-- 2.覆盖的文案 -->
            <div class="infos">
                <div class="summary">{{ itemData.summaryText }}</div>
                <div class="name">{{ itemData.houseName }}</div>
                <div class="price">
                  <van-rate :model-value="Number(itemData.commentScore)" size="12" gutter="0" color="#fff" />
                    <span class="new">¥ {{ itemData.finalPrice }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps({
    itemData: {
        type: Object,
        default: () => ({})
    }
})

</script>

<style lang="less" scoped>

.house-item{
  width: 50%;

  .item-inner{
    position: relative;
    border-radius: 5px;
    margin: 5px;
    overflow: hidden;

    .cover{
      img{
        width: 100%;
      }
    }
    .infos{
      position: absolute;
      bottom: 0;
      padding: 5px;
      color: #fff;
      
      .summary{
        font-size: 12px;
      }
      .name{
        margin: 5px 0;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
      }

      .price {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
        }
    }
  }
}

</style>