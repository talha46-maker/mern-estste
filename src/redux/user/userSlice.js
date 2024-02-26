
import { createSlice } from "@reduxjs/toolkit";
const initialstate={
    currentUser:null,
    console:null,
    loading:false,
};
const userSlice= createSlice({
    name:'user',
    initialstate,
    reducers: { 
        
        
        signInStart:(start)=>{
             start.loading = true;
},
signInSuccess:(state,action) =>{

state.currentUser=action.payload;
    state.loading = false;
    state.error=null;
 },

 
        signInFailure:(state,action) =>{
            state.error=action.payload;
          state.loading = false; 
        }

      
    }
});


export const {signInStart , signInSuccess,signInFailure}=userSlice.actions;
export default userSlice.reducer;

/*
          
       
    
 

*/ 



