import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  details: Record<string, any> | null;
};

const initialState: UserState = {
  details: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        details: any;
      }>
    ) => {
      state.details = action.payload.details;
    },
    clearUser: (state) => {
      state.details = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
