import axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'production' ? '/api/' : '//localhost:3030/api/'

export const httpService = {
    get(endpoint, data) {
        return ajax(endpoint, 'GET', data)
    },
    post(endpoint, data) {
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint) {
        return ajax(endpoint, 'DELETE')
    }
}

async function ajax(endpoint, method = 'GET', data = null) {
    try {
        if ( method === 'POST' & endpoint !== "order/") {
            const res = await axios({
                url: `${endpoint}`,
                method,
                data,
                params: (method === 'GET') ? data : null
            })
            if(method === 'POST' & endpoint === 'https://secure.cardcom.solutions/Interface/LowProfile.aspx'){
                return resUrl(res.data)
            }
            return res.data
        } else {
            const res = await axios({
                url: `${BASE_URL}${endpoint}`,
                method,
                data,
                params: (method === 'GET') ? data : null
            })
            console.log('res.data',res.data);
            return res.data
        }
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`)
        console.dir(err)
        if (err.response && err.response.status === 401) {
            // Depends on routing startegy - hash or history
            window.location.assign('/#/login')
            throw err
        }
    }
}

function resUrl(data) {
    const urlStart = data.indexOf("&url=")
    const urlEnd = data.indexOf("&", urlStart + 1)
    const fullUrl = data.substr(urlStart + 5, (urlEnd - (urlStart + 5)));
    return replace(fullUrl)
}
function replace(data) {
    return data.replaceAll("%2f", "/").replaceAll("%3f", "?").replaceAll("%3a", ":").replaceAll("%3d", "=");
}