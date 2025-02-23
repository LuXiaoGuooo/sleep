<template>
    <div class="home-search">
        <!-- 1.位置信息 -->
        <div class="location">
         <div class="city" @click="ClickCity">{{ currentCity.cityName }}</div>
        <div class="position" @click="clickPosition">
         <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>

      </div>

      <!-- 2.日期范围 -->
       <div class="item data-rang  bottom-gray-line" @click="showCalendar = true">
         <div class="start">
            <div class="data">
                <span class="tip">入住</span>
                <span class="time">{{ startDate }}</span>
            </div>
            <div class="stay">共{{ stayCounte }}晚</div>
         </div>
        
         <div class="end">
            <div class="data">
                <span class="tip">离店</span>
                <span class="time">{{ endDate }}</span>
            </div>
         </div>
       </div>
       <van-calendar 
         v-model:show="showCalendar" 
         :round=false
         color=var(--primary-color)
         type="range" 
         @confirm="onConfirm" 
         />
         <!-- 3.价格 -->
          <div class="item price-counter 
">
            <div class="start">价格不限</div>
            <div class="end">人数不限</div>
          </div>
          <div class="item keyword ">关键字/位置/民宿名</div>
          <!-- 4.热门建议 -->
           <div class="item hot-suggest">
            <template v-for="(item, index) in hotSuggests" :key="item.index">
                <span class="tag">{{ item.tagText.text }}</span>
            </template>
           </div>
    </div>
</template>

<script setup>
import { toRefs, ref } from 'vue'
import useCityStore from '@/stores/modules/city'
import { useRouter } from 'vue-router'
import { formatMonthDay, getDiffDays } from '@/utils/format_data'
import  useHomeStore  from '@/stores/modules/home'
import { storeToRefs } from 'pinia'


// 1.城市的逻辑
const router = useRouter()
const ClickCity = () => {
    router.push('./city')
}
// 获取位置
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
// 当前城市
const cityStore = useCityStore()
const currentCity = toRefs(cityStore.currentCity)

// 2. 日期的逻辑 日期范围的处理
const nowDate = new Date()
const startDate = ref(formatMonthDay(nowDate))

const newDate = new Date().setDate(nowDate.getDate() + 1)
const endDate = ref(formatMonthDay(newDate))
const stayCounte = ref(getDiffDays(nowDate, newDate))


const showCalendar = ref(false)
const onConfirm = (value) => {
    // 1.设置日期
    const selectStartDate = value[0]
    const selectEndDate = value[1]
    startDate.value = formatMonthDay(selectStartDate)
    endDate.value = formatMonthDay(selectEndDate)
    stayCounte.value = getDiffDays(selectStartDate, selectEndDate)
    // 2.隐藏日期
    showCalendar.value = false
}

// 3.热门建议的逻辑
const HomeStore = useHomeStore()
const { hotSuggests } = storeToRefs(HomeStore)

</script>

<style lang="less" scoped>
.home-search{
    --van-calendar-popup-height: 100%
}
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

.data-rang{
    height: 44px;
    .stay{
        flex: 1;
        text-align: center;
        font-size: 12px;
        color: #666;
    }
}


.hot-suggest {
  margin: 15px 0;

  .tag {
    font-size: 12px;
    padding: 4px 8px;
    margin: 3px;
    border-radius: 14px;
    color: #3f4954;
    background-color: #f1f3f5;
  }
}

.item{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 20px;
    color: #999;

    .start{
        flex: 1;
        display: flex;
        height: 44px;
        align-items: center;
    }

    .end{
        min-width: 30%;
        padding-left: 20px;
    }

    .data{
        display: flex;
        flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
    }
}
</style>