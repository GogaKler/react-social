import { getAuthUser } from "./auth_reducer"

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initalState = {
	initialized: false
}

const AppReducer = (state = initalState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS: {
			return { ...state, initialized: true }
		}
		default:
			return state
	}
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
	let promise = dispatch(getAuthUser())
	Promise.all([promise])
	.then(() => {
		dispatch(initializedSuccess())
	})
}

export default AppReducer