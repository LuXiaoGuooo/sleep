import { onMounted, onUnmounted,ref } from 'vue'

export default function useScroll(reachBottomCB){
    const isReachBootom = ref(false)
    const scrollListernerHandler = () => {
        const clientHeight = document.documentElement.clientHeight
        const scrollTop = document.documentElement.scrollTop
        const scrolHeiht = document.documentElement.scrollHeight
        console.log(clientHeight, scrollTop, scrolHeiht)
          if(clientHeight + scrollTop >= scrolHeiht){
            console.log("滚动到底部了")
            isReachBootom.value = true
          }
        }
  
      onMounted(() => {
        window.addEventListener('scroll', scrollListernerHandler)
      })
    
      onUnmounted(() => {
        window.removeEventListener('scroll', scrollListernerHandler)
     })  

       return { isReachBootom }
    }
   


