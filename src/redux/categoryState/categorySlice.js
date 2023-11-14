import { createSlice } from "@reduxjs/toolkit";


const initialState =[]



export const categorySlice = createSlice({   
  name: "category",
  initialState,  
  reducers: {
    addCategory: (state,action) => {
       if(action.payload.checked){
          return state=[...state,action.payload.value]
       }
       else{
        return state=[...state.filter(item=>item!==action.payload.value)]
       }     
    },

  },
});

// Action creators are generated for each case reducer function
export const { addCategory} =
  categorySlice.actions;

export default categorySlice.reducer;
