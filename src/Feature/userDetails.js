import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk('createUser' ,async(data,{rejectWithValue})=>{
const response = await fetch('https://65279e9e931d71583df115a1.mockapi.io/crud',{
   method:'POST',
   headers:{
      'Content-type':'application/json'
   },
   body:JSON.stringify(data)
});
try {
   const result = await response.json()
   return result
} catch (error) {
   return rejectWithValue(error)
}
})
export const deleteUser = createAsyncThunk('deleteUser' ,async(id,{rejectWithValue})=>{
const response = await fetch(`https://65279e9e931d71583df115a1.mockapi.io/crud/${id}`,{method:'DELETE'})

try {
   const result = await response.json()
   return result
} catch (error) {
   return rejectWithValue(error)
}
})
export const editUser = createAsyncThunk('deleteUser' ,async(data,{rejectWithValue})=>{
   const response = await fetch(`https://65279e9e931d71583df115a1.mockapi.io/crud/${data.id}`,{method:'PUT',
   headers:{
      'Content-type':'application/json'
   },
   body:JSON.stringify(data)
})
   
   try {
      const result = await response.json()
      return result
   } catch (error) {
      return rejectWithValue(error)
   }
   })
export const readUser = createAsyncThunk ('readUser',async(data,{rejectWithValue})=>{
// const response  = fetch('https://65279e9e931d71583df115a1.mockapi.io/crud')
const response = axios.get('https://65279e9e931d71583df115a1.mockapi.io/crud')

try {
   const result =  await response
   return result.data
   // return (await response).data

} catch (error) {
   return rejectWithValue(error)
   
}

})
 export const userDetails = createSlice({
    name:'userDetails',
    initialState:{
    user:[],
    isLoading:false,
    error:null,
    searchData :[],
    choseData:''
    },
    reducers:{
searchUser:(state ,action)=>{
   
state.searchData = action.payload
},
choseDatas:(state ,action)=>{

state.choseData = action.payload


    }
   },
    extraReducers:{
      [createUser.pending]:(state)=>{
state.isLoading = true
      },
      [createUser.fulfilled]:(state,action)=>{
state.isLoading = false;
state.user.push(action.payload)

      },
      [createUser.rejected]:(state,action)=>{
state.isLoading = false;
state.error = action.payload

      },
      [deleteUser.pending]:(state)=>{
state.isLoading = true
      },
      [deleteUser.fulfilled]:(state,action)=>{
state.isLoading = false;
state.user = state.user.push(action.payload)


      },
      [deleteUser.rejected]:(state,action)=>{
state.isLoading = false;
state.error = action.payload

      },
      [editUser.pending]:(state)=>{
state.isLoading = true
      },
      [editUser.fulfilled]:(state,action)=>{
state.isLoading = false;
state.user = state.user.map((item)=>item.id===action.payload.id?action.payload:item)

      },
      [editUser.rejected]:(state,action)=>{
state.isLoading = false;
state.error = action.payload

      },
      [readUser.pending]:(state)=>{
         state.isLoading = true
               },
               [readUser.fulfilled]:(state,action)=>{
         state.isLoading = false;
         state.user = action.payload
         
               },
               [readUser.rejected]:(state,action)=>{
         state.isLoading = false;
         state.error = action.payload
         
               }

    }

 })
 export default userDetails.reducer
 export const  {searchUser,choseDatas} = userDetails.actions;
