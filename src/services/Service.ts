import axios from 'axios';
import type User from '../models/User';
import type UserLogin from '../models/UserLogin';

const api = axios.create({
    baseURL: 'https://personal-blog-backend-ts1o.onrender.com',
});

export const createUser = async (url: string, userData: User, setData: (data: User) => void) => {
   
    try {
        const response = await api.post<User>(url, userData);
        setData(response.data);
        return response.data;
    } catch (error) {
        console.error("Error creating user: ", error);
        throw error;
    }
}

export const login = async (url: string, creds: UserLogin, setData: (data: UserLogin) => void) => {
    try {
        const response = await api.post<UserLogin>(url, creds);
        setData(response.data);
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }

}