import { RootState } from "./store";

export const selectUserRole = (state: RootState) => state.user.role;
export const selectUserToken = (state: RootState) => state.user.token;
export const selectUserDetails = (state: RootState) => state.user.details;
