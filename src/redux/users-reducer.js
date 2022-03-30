 import { followApi, usersApi } from "../api/api"

const USER_FOLLOW = 'USER_FOLLOW'
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const PRELOADER_IS_FETCHING = "PRELOADER_IS_FETCHING"
const FOLLOW_IN_PROGRESS = "FOLLOW_PROGRESS"

let initalState = {
	Users: [],
	totalUsersCount: null,
	pageSize: 20,
	currentPage: 1,
	isFetching: null, // preloader
	followProgress: [],
}

const UsersReducer = (state = initalState, action) => {
	switch (action.type) {
		case USER_FOLLOW:
			return {
				...state,
				Users: state.Users.map(el => {  // Копирование с помощью map. Интдентично ( Users: [...state.User] )
					if (el.id === action.userId) {
						return { ...el, followed: !el.followed }
					};
					return el;
				})
			}
		case SET_USERS: {
			return { ...state, Users: action.users }
		}
		case SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.currentPage }
		}
		case SET_TOTAL_USERS_COUNT: {
			return { ...state, totalUsersCount: action.totalCount }
		}
		case PRELOADER_IS_FETCHING: {
			return { ...state, isFetching: action.isFetching }
		}
		case FOLLOW_IN_PROGRESS: {
			return { ...state, followProgress: action.inProgress 
			?	[...state.followProgress,  action.userId]
			// :	state.followProgress.filter(id => id !== action.userId)
			: state.followProgress.filter( function(id) {
				return id !== action.userId	
			})
		 }
		}
		default:
			return state
	}
}

// Action Creators
export const userFollow = (userId) => ({ type: USER_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
export const preloaderIsFetching = (isFetching) => ({ type: PRELOADER_IS_FETCHING, isFetching });
export const followInProgress = (inProgress, userId) => ({ type: FOLLOW_IN_PROGRESS, inProgress, userId });


// Thunks
export const requestUsers = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(preloaderIsFetching(true)); // Начало загрузки preloader
		dispatch(setCurrentPage(currentPage));
		usersApi.getUsers(currentPage, pageSize).then(data => { // Запрос на сервер
			dispatch(preloaderIsFetching(false)); // Конец загрузки preloader
			dispatch(setUsers(data.items)) // Set пользователей пришедших с сервера
			dispatch(setTotalUsersCount(data.totalCount)) // Количество пользователей (число)
		});
	} 
}
export const follow = (userId) => {
	return (dispatch) => {
		dispatch(followInProgress(true, userId));
		followApi.getFollow(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(userFollow(userId))
			}
			dispatch(followInProgress(false, userId));
		})
	}
}
export const unFollow = (userId) => {
	return (dispatch) => {
		dispatch(followInProgress(true, userId));
		followApi.deleteFollow(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(userFollow(userId))
			}
			dispatch(followInProgress(false, userId));
		})
	}
}






export default UsersReducer;