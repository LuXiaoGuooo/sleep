import HYRequest from '../request'


export function getHomeSuggests(){
    return HYRequest.get({
        url: '/home/hotSuggests'
    })
}

export function getCategories(){
    return HYRequest.get({
        url: '/home/categories'
    })
}