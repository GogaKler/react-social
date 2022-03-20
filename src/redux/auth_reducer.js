import { authApi } from "../api/api"

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'


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

export const getAuthUser = () => (dispatch) => {
	authApi.getAuthUser().then(data => {
		let { id, email, login } = data.data;
		if (data.resultCode === 0) {
			dispatch(setAuthUserData(id, email, login, true));
		}
	});
}
export const login = (email, password, rememberMe) => (dispatch) => {
	authApi.login(email, password, rememberMe).then(data => {
		if (data.resultCode === 0) {
			dispatch(getAuthUser())
		}
	});
}
export const logout = () => (dispatch) => {
	authApi.logout().then(data => {
		if (data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false));
		}
	});
}


export default AuthReducer;