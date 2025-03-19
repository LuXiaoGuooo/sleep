<template>
    <div class="house">
        <div class="name">{{ infosData.houseName }}</div>
        <div class="tags">
            <template v-for="(item, index ) in infosData.houseTags" :key="index">
                <span
                 class="item"
                 v-if="item.tagText"
                 :style="{ color: item.tagText.color , background: item.tagText.background.color }"
                >
                    {{ item.tagText.text }}
                </span>
            </template>
        </div>
        <div class="extra comment">
            <div class="left">
                <span class="score">{{ infosData.commentBrief.overall }}</span>
                <span class="title">{{ infosData.commentBrief.scoreTitle }}</span>
                <span class="brief">{{ infosData.commentBrief.commentBrief }}</span>
            </div>
            <div class="right">
                <span>{{ infosData.commentBrief.totalCount + "条评论 >" }}</span>
            </div>
        </div>
        <div class="extra position">
            <div class="left">
                <span class="address">{{ infosData.nearByPosition.address }}</span>
            </div>
            <div class="right">
                地图·周边 >
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    infosData : {
        type: Object,
        defalut: () => {}
    }
})
</script>

<style lang="less" scoped>
.house{
    padding: 16px;
    background-color: #fff;

    .name{
        font-weight: 700;
        font-size: 20px;
        text-align: justify;
        color: #333;
        line-height: 24px;
        margin-bottom: 10px;
        overflow: hidden;
    }

    .tags{
        margin: 10px 0;

        .item{
            font-size: 12px;
      margin: 0 2px;
      padding: 1px 3px;
        }
    }

    .extra{
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 8px 12px;
        margin: 12px 0;
        border-radius: 5px;
        
        font-size: 12px;
        background-color: #f5f7fa;

        .right {
      color: #ff9645;
    }
    }
  .comment {
    padding: 8px -22px;
    .score {
      font-size: 18px;
      font-weight: 700;
      color: #333;
    }

    .title {
      color: #333;
      font-weight: 700;
      margin: 0 3px;
    }

    .brief {
        overflow: hidden;
      color: #666;
    }
  }

  .position {
    .address {
      font-size: 14px;
      font-weight: 700;
      color: #333;
    }
  }
}

</style>