import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './modalSlice'
import userSlice from './userSlice'

export default configureStore({
  reducer: {
    modals: modalSlice,
    user: userSlice
  }
})