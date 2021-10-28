import Axios from "axios"

const getCityList = (params) => {
    return Axios.get('https://m.maizuo.com/gateway', {
        params,
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16309749181413430787440641","bc":"141000"}',
            'X-Host': 'mall.film-ticket.city.list'
        }
    })
}
export default getCityList