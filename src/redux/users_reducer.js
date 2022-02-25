const USER_FOLLOW = 'USER_FOLLOW'
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const PRELOADER_IS_FETCHING = "PRELOADER_IS_FETCHING"

let initalState = {
	Users: [],
	totalUsersCount: null,
	pageSize: 20,
	currentPage: 1,
	isFetching: null, // preloader
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


		default:
			return state
	}
}

export const userFollow = (userId) => ({ type: USER_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
export const preloaderIsFetching = (isFetching) => ({ type: PRELOADER_IS_FETCHING, isFetching });


export default UsersReducer;