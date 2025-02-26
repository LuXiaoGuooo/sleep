import { defineStore } from 'pinia'
import { getHomeSuggests , getCategories, getHouseList } from '@/services'

const useHomeStore = defineStore('homeStore', {
    state: () => ({     
        hotSuggests: [],
        categories: [],
        currentPage: 1, 
        houselist: []
    }),
    actions: {
        async fetchHotSuggestsDate(){
            const res = await getHomeSuggests()
            this.hotSuggests = res.data
        },
        async fetchCategoriesDate(){
            const res = await getCategories()
            this.categories = res.data
        },
        async fetchHouselistDate(){
            const res = await getHouseList(this.currentPage)
            this.houselist.push( ...res.data )
            this.currentPage++
        }
    }
})

export default useHomeStore