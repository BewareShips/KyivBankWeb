import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
   name: "user",
   initialState: {
      username: "",
      email: "",
      accountNumberGenerated: "",
      balance: 0,
      externalId: null,
      externalType: null,
   },
   reducers: {
      userData: (state, action) => {
         return {
            ...state,
            ...{
               username: action.payload.username,
               email: action.payload.email,
               accountNumberGenerated: action.payload.accountNumberGenerated,
               balance: action.payload.balance,
            },
         };
      },
   },
});

export const { userData } = userSlice.actions;

export default userSlice.reducer;
