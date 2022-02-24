const USER_FOLLOW = 'USER_FOLLOW'
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"

let initalState = {
	Users: [],
	totalUsersCount: null,
	pageSize: 20,
	currentPage: 1,
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

		default:
			return state
	}
}

export const UserFollowAC = (userId) => ({ type: USER_FOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCountAC = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });


export default UsersReducer;