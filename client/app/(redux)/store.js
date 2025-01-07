import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/authSlice'

const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
  },
})

export default store
