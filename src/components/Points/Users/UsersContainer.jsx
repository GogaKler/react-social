import { connect } from "react-redux"
import { setCurrentPage, userFollow, followInProgress, getUsers, follow, unFollow } from "../../../redux/users_reducer"
import Users from "./Users"
import React from 'react';
import { Navigate } from "react-router-dom";

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize);
	}

	render() {
		if (this.props.isAuth === false) {
			return <Navigate to='/login' />
		}

		return (
			<Users 
			 	onPageChanged={this.onPageChanged}
				Users={this.props.Users}
				pageSize={this.props.pageSize}
				totalUsersCount={this.props.totalUsersCount}
				currentPage={this.props.currentPage}
				isFetching={this.props.isFetching}
				followProgress={this.props.followProgress}
				follow={this.props.follow}	
				unFollow={this.props.unFollow}	
			/>
		);
	}

}

let mapStateToProps = (state) => {
	return {
		// Auth
		isAuth: state.auth.isAuth,
		// Users
		Users: state.users.Users,
		pageSize: state.users.pageSize,
		totalUsersCount: state.users.totalUsersCount,
		currentPage: state.users.currentPage,
		isFetching: state.users.isFetching,
		followProgress: state.users.followProgress,
	}
}

export default connect(mapStateToProps,
	{ userFollow, setCurrentPage, followInProgress, 
	getUsers, follow, unFollow })(UsersContainer)