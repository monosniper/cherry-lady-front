import axios from "axios";

const resolveData = ({ data }) => data

const $api = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'Content-Type': 'application/json',
        // 'Accept': 'application/json',
    },
})

$api.interceptors.response.use(resolveData)

export default $api;