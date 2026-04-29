import { ApiError } from "@/types/api-type";
import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: '/api/erp/v1',
    withCredentials: true,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
});

api.interceptors.response.use(
    (response) => {
        // Log('response', response.data)
        if (response.data?.exc_type) {
            return Promise.reject(response.data as ApiError);
        }
        return response;
    },
    (error) => {
        // Log('in axios', error.response?.data)
        // Log('axios error', error.status)
        if (error.status === 401 || error.status === 403) {
            window.location.href = '/login';

            const errObj: ApiError = {
                message: 'Unauthorized. Please log in.',
                exc_type: 'Unauthorized',
            };
            return Promise.reject(errObj);
        }
        return Promise.reject(error.response?.data as ApiError);
    }
);

export default api;