import axios from "axios";

const resolveData = ({ data }) => data

const $api = axios.create({
    baseURL: import.meta.env.VITE_API_URL + '/api/',
    headers: {
        'Content-Type': 'application/json',
        // 'Accept': 'application/json',
    },
})

$api.interceptors.response.use(resolveData)

export default $api;