import { onMounted, onUnmounted,ref } from 'vue'
import { throttle } from 'underscore'

export default function useScroll(reachBottomCB){
    const isReachBootom = ref(false)
    const clientHeight = ref(0)
    const scrollTop = ref(0)
    const scrolHeiht = ref(0)

    // 添加节流
    const scrollListernerHandler = throttle(() => {
      clientHeight.value = document.documentElement.clientHeight
      scrollTop.value = document.documentElement.scrollTop
      scrolHeiht.value = document.documentElement.scrollHeight

        if(clientHeight.value + scrollTop.value >= scrolHeiht.value){
          console.log("滚动到底部了")
          isReachBootom.value = true
        }
      }, 100)
  
      onMounted(() => {
        window.addEventListener('scroll', scrollListernerHandler)
      })
    
      onUnmounted(() => {
        window.removeEventListener('scroll', scrollListernerHandler)
     })  

       return { isReachBootom, clientHeight, scrollTop, scrolHeiht }
    }
   


