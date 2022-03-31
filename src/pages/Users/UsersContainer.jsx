import React from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { follow, followInProgress, requestUsers, setCurrentPage, unFollow, userFollow } from "../../redux/users-reducer";
import { getCurrentPage, getFollowProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/users-selectors";
import Users from "./Users";
import './Users.css';

class UsersContainer extends React.Component {

	componentDidMount() {
		const {currentPage, pageSize} = this.props
		this.props.requestUsers(currentPage, pageSize);
	}

	onPageChanged = (pageNumber) => {
		const {pageSize} = this.props
		this.props.requestUsers(pageNumber, pageSize);
	}

	render() {
		return (
			<Users onPageChanged={this.onPageChanged} {...this.props} />
		);
	}

}

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