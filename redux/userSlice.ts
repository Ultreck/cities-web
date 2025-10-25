import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  token: string | null;
  role: "renter" | "landlord" | null;
  details: Record<string, any> | null;
};

const initialState: UserState = {
  token: null,
  role: null,
  details: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
     setUserRole: (state, action: PayloadAction<'renter' | 'landlord'>) => {
      state.role = action.payload;
    },
    setUser: (
      state,
      action: PayloadAction<{
        token: string;
        role: "renter" | "landlord";
        details: any;
      }>
    ) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.details = action.payload.details;
    },
    clearUser: (state) => {
      state.token = null;
      state.role = null;
      state.details = null;
    },
    clearRole: (state) => {
      state.role = null;
    },
  },
});

export const { setUserRole, setUser, clearUser, clearRole } = userSlice.actions;
export default userSlice.reducer;
