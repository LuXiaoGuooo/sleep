import hyRequest from '../request'

export function getDatailInfos(houseId){
    return hyRequest.get({
        url: '/detail/infos',
        params: {
            houseId
        }
    })
}