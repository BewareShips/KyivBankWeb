import { userAuthenticated } from '../app/authenticationSlice';
import * as axios from 'axios';
import { userData } from '../app/userSlice';

const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}/Authentication`,
});

export const SignUp = async (dispatch, credentials) => {
    try {
        // api call
        const { data } = await axiosInstance.post('/signup', credentials);
        //localStorage.setItem('userName', credentials);
        dispatch(userAuthenticated(data));
    } catch {
        console.log('Error!');
    }
}

export const SignIn = async (dispatch, credentials) => {
    try {
        // api call
        const { data } = await axiosInstance.post('/signin', credentials);
        console.log(credentials,'credentials')
        //localStorage.setItem('userName', credentials);
        dispatch(userAuthenticated(data));
    } catch {
        console.log('Error!');
    }
}

export const getUserByName = async (dispatch, name) => {
    try {
        // api call
        const { data } = await axiosInstance.get(`/get_account?name=${name}`);
        dispatch(userData(data));
    } catch {
        console.log('Error!');
    }
}

export const ThirdPartySignIn = async (dispatch, token) => {
    try {
        // api call        
        const { data } = await axiosInstance.post(`/google?token=${token}`);
        dispatch(userAuthenticated(data));
    } catch {
        console.log('Error!')
    }
}