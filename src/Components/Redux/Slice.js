import {createSlice,createAsyncThunk, isRejected} from "@reduxjs/toolkit";
// Action
export const getUser = createAsyncThunk("getUser",async()=>{
   const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const jsonData = await response.json();
    return jsonData; 
})
 const todoSlice=createSlice({
   name:"todo",
   initialState:{
      data:null,
      loading:false,
      error:false

   },
   extraReducers:(builder)=>{
     builder.addCase(getUser.fulfilled,(state,action)=>{
      state.loading=false;
      state.data=action.payload;
     });
     builder.addCase(getUser.pending,(state,action)=>{
      state.loading=true;
     })
     builder.addCase(getUser.rejected,(state,action)=>{
      console.log('Error',action.payload);
      state.error=true;
     })
   }
 })
export default todoSlice.reducer