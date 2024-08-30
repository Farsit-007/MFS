import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logout } = useAuth()
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('token')
        console.log('req stop by interceptor', token);
        // console.log("Debag", token);
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error) {
        return Promise.reject(error)
    })

    axiosSecure.interceptors.response.use(function (response) {
        return response
    }, async (error) => {
        const status = error.response.status
        if (status === 401 || status === 403) {
            await logout()
            navigate('/')
        }
        return Promise.reject(error)
    })
    return axiosSecure
};

export default useAxiosSecure;