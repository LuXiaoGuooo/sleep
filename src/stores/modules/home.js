import { defineStore } from 'pinia'
import { getHomeSuggests , getCategories } from '@/services'

const useHomeStore = defineStore('homeStore', {
    state: () => ({     
        hotSuggests: [],
        categories: []
    }),
    actions: {
        async fetchHotSuggestsDate(){
            const res = await getHomeSuggests()
            this.hotSuggests = res.data
        },
        async fetchCategoriesDate(){
            const res = await getCategories()
            this.categories = res.data
        }
    }
})

export default useHomeStore