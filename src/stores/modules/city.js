import { getCityAll } from '@/services'
import { defineStore } from 'pinia'

const useCityStore = defineStore('cityStore', {
    state: () => {
        return{
            allCities :{ },
            currentCity:{ 
                cityName: '广州'
             }
        }
    },
    actions:{
         async fetchALLCitiesData(){
            const res = await getCityAll()
            this.allCities = res.data
        }
    }
})

export default useCityStore