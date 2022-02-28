const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_IS_AUTH = 'SET_IS_AUTH'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


let initalState = {
	id: null,
	email: null,
	login: null,
	userProfile: null,
	isAuth: false,
}

const AuthReducer = (state = initalState, action) => {
	switch (action.type) {
		case SET_AUTH_USER_DATA: {
			return { ...state, ...action.data }
		}
		case SET_IS_AUTH: {
			return {...state, isAuth: action.isAuth}
		}
		case SET_USER_PROFILE:
			return{ ...state, userProfile: action.profile }
		default:
			return state
	}
}

export const setAuthUserData = (id, email, login) => ({ type: SET_AUTH_USER_DATA, data: {id, email, login} });
export const setIsAuth = (isAuth) => ({ type: SET_IS_AUTH, isAuth });
export const setUserProfle = (profile) =>({type: SET_USER_PROFILE, profile}) ;

export default AuthReducer;