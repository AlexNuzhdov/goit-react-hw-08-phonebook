import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
	user: { name: null, email: null },
	token: null,
	isLoggedIn: false,
	isRefreshing: false,
	error: false,
	
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: {
		[register.fulfilled](state, action) {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isLoggedIn = true;
		},
		[register.rejected](state, action) {
			state.error = action.payload;
		},
		[logIn.fulfilled](state, action) {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isLoggedIn = true;
		},
		[logIn.rejected](state, action) {
			state.error = action.payload;
		},
		[logOut.fulfilled](state) {
			state.user = { name: null, email: null };
			state.token = null;
			state.isLoggedIn = false;
		},
		[refreshUser.pending](state) {
			state.isRefreshing = true;
		},
		[refreshUser.fulfilled](state, action) {
			state.user = action.payload;
			state.isLoggedIn = true;
			state.isRefreshing = false;
		},
		[refreshUser.rejected](state) {
			state.isRefreshing = false;
		},
	},
});

export const authReducer = authSlice.reducer;