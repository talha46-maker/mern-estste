/*
import { configureStore } from '@reduxjs/toolkit'
import { buildGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'
import { useReducer } from 'react'
import userReducer from  './user/userSlice';

export const store = configureStore({
  reducer: {user:useReducer},
  middleware:(buildGetDefaultMiddleware)=>buildGetDefaultMiddleware({
    serializableCheck:false,
  }),
})
*/





import { configureStore } from '@reduxjs/toolkit';

//import { useDispatch } from 'react-redux';//
import userReducer from './user/userSlice';

// eslint-disable-next-line no-undef
export const store = configureStore({
  reducer: {
user:userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
});

//export const useAppDispatch = () => useDispatch();//


