import { defineStore } from 'pinia' 

const startDate = new Date()
const endDate = new Date().setDate(startDate.getDate() + 1)

const useMainStore = defineStore('mainStore', {
    state: () => ({
       startDate: startDate,
       endDate: endDate
    })
})

export default useMainStore