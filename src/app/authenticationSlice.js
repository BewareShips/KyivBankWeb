import { createSlice } from '@reduxjs/toolkit';

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: {
        token: '',
        isLoggedIn: false,
        user: ''
    },
    reducers: {
        userAuthenticated: (state, action) => {
            sessionStorage.setItem('token', action.payload.token);
            return {
                ...state, ...{
                    token: action.payload.token,
                    isLoggedIn: true,
                    user: action.payload.username
                }
            }
        },
        logout: () => {
            sessionStorage.clear();
        }
    }
});

export const { userAuthenticated, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;