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
			return { ...state, ...action.data, isAuth: true }
		}
		default:
			return state
	}
}

export const setAuthUserData = (id, email, login) => ({ type: SET_AUTH_USER_DATA, data: {id, email, login} });

export const getAuthUser = () => (dispatch) => {
		authApi.getAuthUser().then(data => {
			let { id, email, login } = data.data;
			if (data.resultCode === 0){
				dispatch(setAuthUserData(id, email, login));
			}
		});
	}


export default AuthReducer;