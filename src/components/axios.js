import axios from 'axios'
import { baseUrl } from './constants.js'
const instance=axios.create({
    baseUrl:baseUrl,
    // timeOut:1000,
    // headers:{'X-Custom-Header':"foobar"}
})
export default instance