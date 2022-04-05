// eslint-disable-next-line no-unused-vars
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authenticationSlice from './authenticationSlice';
import expensesSlice from './expensesSlice';
import statisticsSlice from './statisticsSlice';
import ToastMiddleware from '../middlewares/ToastMiddleware';
import userSlice from './userSlice';


export default configureStore({
  reducer: {
    authenticationSlice: authenticationSlice,
    expensesSlice: expensesSlice,
    statisticsSlice: statisticsSlice,
    userSlice: userSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ToastMiddleware)
});
