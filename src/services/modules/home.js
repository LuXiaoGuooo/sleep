import HYRequest from '../request'


export function getHomeSuggests(){
    return HYRequest.get({
        url: '/home/hotSuggests'
    })
}