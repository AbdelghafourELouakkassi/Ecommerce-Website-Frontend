import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const cartdata=JSON.parse(localStorage.getItem('cart'))

const initialState =cartdata || [];



export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
     const itemProduct=state.find((item)=>item.id===action.payload.id)
     if(itemProduct){
      itemProduct.quantity+=1
      Swal.fire({
        title: 'success',
        text: 'quantity updated',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
     }
     else{
      state=[...state,action.payload]
      Swal.fire({
        title: 'success',
        text: 'item added to the cart',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
     }
     localStorage.setItem('cart',JSON.stringify([...state]))
     return state
      ;
    },
    removeItem: (state, action) => {
      state = [
        ...state.filter((item) => item.id !== action.payload.id),
      ];
      Swal.fire({
        title: 'success',
        text: 'item removed',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
      localStorage.setItem('cart',JSON.stringify([...state]))
      return state
    },
    emptyCart:(state) => {
      localStorage.setItem('cart',JSON.stringify([...state]))
      return state=[];
    },
    addQuantity: (state, action) => {
      state.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity += 1;
        }
        localStorage.setItem('cart',JSON.stringify([...state]))
      });
    },
    removeQuantity: (state, action) => {
      state.map((item) => {
        if (item.id === action.payload.id) {
          if(item.quantity>1)
          item.quantity -= 1;
        }
        localStorage.setItem('cart',JSON.stringify([...state]))
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, emptyCart, addQuantity, removeQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
