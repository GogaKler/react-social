import { connect } from "react-redux"
import { preloaderIsFetchingAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, UserFollowAC } from "../../../redux/users_reducer"
import Users from "./Users"
import React from 'react';
import * as axios from 'axios'

class UsersContainer extends React.Component {

	
	componentDidMount() {
		this.props.preloaderIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.preloaderIsFetching(false);
			this.props.setUsers(response.data.items)
			this.props.setTotalUsersCount(response.data.totalCount)
		});
	}
	onPageChanged = (pageNumber) => {
		this.props.preloaderIsFetching(true);
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
			this.props.preloaderIsFetching(false);
			this.props.setUsers(response.data.items)
		});
	}
	render() {
		return (
			<Users onPageChanged={this.onPageChanged}
				Users={this.props.Users}
				pageSize={this.props.pageSize}
				totalUsersCount={this.props.totalUsersCount}
				currentPage={this.props.currentPage}
				isFetching={this.props.isFetching}
			/>
		);
	}
	
}

let mapStateToProps = (state) => {
	return {
		Users: state.users.Users,
		pageSize: state.users.pageSize,
		totalUsersCount: state.users.totalUsersCount,
		currentPage: state.users.currentPage,
		isFetching: state.users.isFetching,
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageAC(pageNumber));
		},
		follow: (userId) => {
			dispatch(UserFollowAC(userId));
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users));
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(setTotalUsersCountAC(totalCount));
		},
		preloaderIsFetching: (isFetching) => {
			dispatch(preloaderIsFetchingAC(isFetching));
		}

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)