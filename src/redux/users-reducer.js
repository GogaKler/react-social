import { followApi, usersApi } from "../api/api"
import { updateObjectInArray } from "../utility/object-helpers"

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
				Users: updateObjectInArray(state.Users, action.userId, 'id')
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
			return {
				...state, followProgress: action.inProgress
					? [...state.followProgress, action.userId]
					: state.followProgress.filter((id) => id !== action.userId)
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
export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
	dispatch(preloaderIsFetching(true));
	dispatch(setCurrentPage(currentPage));
	let data = await usersApi.getUsers(currentPage, pageSize)
	dispatch(preloaderIsFetching(false));
	dispatch(setUsers(data.items))
	dispatch(setTotalUsersCount(data.totalCount))
}

const follorUnFollowFlow = async (dispatch, userId, apiMethod) => {
	dispatch(followInProgress(true, userId));
	let data = await apiMethod(userId)

	if (data.resultCode === 0) {
		dispatch(userFollow(userId))
	}
	dispatch(followInProgress(false, userId));
}
export const follow = (userId) => async (dispatch) => {
	follorUnFollowFlow(dispatch, userId, followApi.getFollow.bind(followApi))
}
export const unFollow = (userId) => async (dispatch) => {
	follorUnFollowFlow(dispatch, userId, followApi.deleteFollow.bind(followApi))
}

export default UsersReducer;