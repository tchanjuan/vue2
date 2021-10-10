import Axios from "axios"

//获取轮播图的列表
const getBannerList = (params) => {
    return Axios.get('https://m.maizuo.com/gateway', {
        params,
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16309749181413430787440641"}',
            'X-Host': ' mall.cfg.common-banner'
        }
    })
}


//获取影片列表的接口
const getFilmList = (params) => {
    return Axios.get("https://m.maizuo.com/gateway?", {
        params,
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16309749181413430787440641","bc":"440300"}',
            'X-Host': 'mall.film-ticket.film.list'
        }
    })
}
export {
    getBannerList,
    getFilmList
}