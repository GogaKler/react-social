import { connect } from "react-redux"
import { setCurrentPage, userFollow, followInProgress, requestUsers, follow, unFollow } from "../../redux/users-reducer"
import Users from "./Users"
import React from 'react';
import { compose } from "redux";
import { getCurrentPage, getFollowProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/users-selectors";

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.requestUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		this.props.requestUsers(pageNumber, this.props.pageSize);
	}

	render() {
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

// let mapStateToProps = (state) => {
// 	return {
// 		// Users
// 		Users: state.users.Users,
// 		pageSize: state.users.pageSize,
// 		totalUsersCount: state.users.totalUsersCount,
// 		currentPage: state.users.currentPage,
// 		isFetching: state.users.isFetching,
// 		followProgress: state.users.followProgress,
// 	}
// }

let mapStateToProps = (state) => {
	return {
		// Users
		Users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followProgress: getFollowProgress(state),
	}
}


export default compose(
	connect(mapStateToProps, { userFollow, setCurrentPage, followInProgress, requestUsers, follow, unFollow })
)(UsersContainer)