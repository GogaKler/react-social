import { authApi } from "../api/api"

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA'


let initalState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
}


const AuthReducer = (state = initalState, action) => {
	switch (action.type) {
		case SET_AUTH_USER_DATA: {
			return { ...state, ...action.payload }
		}
		default:
			return state
	}
}

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: { id, email, login, isAuth } });

export const getAuthUser = () => async (dispatch) => {
	let data = await authApi.getAuthUser()

	if (data.resultCode === 0) {
		let { id, email, login } = data.data;
		dispatch(setAuthUserData(id, email, login, true));
	}
}
export const login = (email, password, rememberMe) => async (dispatch) => {
	let data = await authApi.login(email, password, rememberMe)
	
		if (data.resultCode === 0) {
			dispatch(getAuthUser())
		}
}
export const logout = () => async (dispatch) => {
	let data = await authApi.logout()

		if (data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false));
		}
}


export default AuthReducer;