import { connect } from "react-redux"
import { setCurrentPageAC, setTotalUsersCountAC, setUsersAC, UserFollowAC } from "../../../redux/users_reducer"
import Users from "./Users"


let mapStateToProps = (state) => {
	return{
		Users: state.users.Users,
		pageSize: state.users.pageSize,
		totalUsersCount: state.users.totalUsersCount,
		currentPage: state.users.currentPage,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageAC(pageNumber))
		},
		follow: (userId) => {
			dispatch(UserFollowAC(userId))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(setTotalUsersCountAC(totalCount))
		}
		
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer;