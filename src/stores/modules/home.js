import { defineStore } from 'pinia'
import { getHomeSuggests } from '@/services'

const useHomeStore = defineStore('homeStore', {
    state: () => ({     
        hotSuggests: [],
        categories: []
    }),
    actions: {
        async fetchHotSuggestsDate(){
            const res = await getHomeSuggests()
            this.hotSuggests = res.data
        }
    }
})

export default useHomeStore