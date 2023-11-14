import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartState/cartSlice'
import categorySlice from './categoryState/categorySlice'




export const store = configureStore({
  reducer: {
    cart:cartSlice,
    category:categorySlice,
  },
})



