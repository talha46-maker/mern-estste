
// import { createSlice } from "@reduxjs/toolkit";

// const initialstate = {
//   currentUser: null,
//   console: null,
//   loading: false,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialstate,
//   reducers: {
//     signInStart: (start) => {
//       start.loading = true;
//     },
//     signInSuccess: (state, action) => {
//       state.currentUser = action.payload;
//       state.loading = false;
//       state.error = null;
//     },

//     signInFailure: (state, action) => {
//       state.error = action.payload;
//       state.loading = false;
//     }
//   }
// });

// export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

// export default userSlice.reducer;









import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  console: null, // Are you sure you want a property named "console" here?
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState, // Corrected from initialstate to initialState
  reducers: {
    signInStart: (state) => { // Changed start to state
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;
