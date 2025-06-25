import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';


const instance = axios.create({
    baseURL: 'https://artifacts-tracker-sable.vercel.app',
});
const AxiosBaseToken = () => {

    const { user } = useContext(AuthContext);
    
    instance.interceptors.request.use(

        (config) => {
            if (user && user.accessToken) {
                config.headers.authorization = `Bearer ${user.accessToken}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    )
    return instance;
};

export default AxiosBaseToken;