import { connect } from "react-redux"
import { preloaderIsFetching, setCurrentPage, setTotalUsersCount, setUsers, userFollow } from "../../../redux/users_reducer"
import Users from "./Users"
import React from 'react';
import { usersApi } from "../../../api/api";

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.preloaderIsFetching(true); // Начало загрузки preloader
		usersApi.getUsers(this.props.currentPage , this.props.pageSize).then(data => { // Запрос на сервер
			this.props.preloaderIsFetching(false); // Конец загрузки preloader
			this.props.setUsers(data.items) // Set пользователей пришедших с сервера
			this.props.setTotalUsersCount(data.totalCount) // Количество пользователей (число)
		});
	}

	onPageChanged = (pageNumber) => {
		this.props.preloaderIsFetching(true);
		this.props.setCurrentPage(pageNumber);
		usersApi.getUsers(pageNumber, this.props.pageSize).then(data => { // Запрос на сервер
			this.props.preloaderIsFetching(false);
			this.props.setUsers(data.items)
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
				userFollow={this.props.userFollow}
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


export default connect(mapStateToProps,
	{ userFollow, setCurrentPage, setUsers, setTotalUsersCount, preloaderIsFetching })(UsersContainer)