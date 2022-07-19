import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'auth',
    initialState: {
        uid: 0,
        role: 0,
        checking: false
    },
    reducers: {
        login: (state, action) => {
            // state = { ...action.payload, checking: false }
            const { uid, role } = action.payload
            state.uid = uid;
            state.role = role;
            state.checking = false;
        },
        startChecking: (state, action) => {
            state.checking = action.payload;
        },
        logout: (state) => {
            state.uid = 0;
            state.role = 0;
            state.checking = false;
        }
    }
});

export const { login, startChecking, logout } = userSlice.actions;

export default userSlice.reducer;