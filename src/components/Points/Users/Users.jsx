import User from './User/User'
import '../../../css/users-point.css'
import { Container } from 'react-bootstrap'
import React from 'react';
import * as axios from 'axios'

class Users extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items)
			this.props.setTotalUsersCount(response.data.totalCount)
		});
	}
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items)
		});
	}

	render() { 

		let UserElements = this.props.Users.map(el =>
			<User 
			key={el.id} 
			id={el.id} 
			name={el.name} 
			photosSmall={el.photos.small} 
			photosLarge={el.photos.large} 
			status={el.status} 
			followed={el.followed} 
			// dispatch
			follow={this.props.follow}
			/>
		)
		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		let pages = [];	

		for (let i=1; i <= pagesCount; i++) {
			if (pages.length < 10){
				pages.push(i);
			}
		}

		let pagesElements = pages.map(p => {
			return(
				<span 
					key={p} 
					className={this.props.currentPage === p ? "pagination__selected" : undefined}
					onClick = {() => {this.onPageChanged(p)}} 
				>{p}</span>
			)
		})

		return (
			<div className='point__users'>
			<Container>
				<div className='users__main-content'>
					<div className='users-header'>
						<div className="search users__search">
							<i className="icon-search bi bi-search"></i>
							<input className="input-search" type="search" placeholder="Поиск.."></input>
							<i className="icon-submit bi bi-arrow-right"></i>
						</div>
					</div>
					<div className='users-middle'>
						<div className='users-middle__header'>
							<div className='users-middle__title'>
								Список пользователей
								<div className='pagination'>
									{pagesElements}
								</div>
							</div>
							<div className="users-wrapper">
								{UserElements}
							</div>
							

						</div>
					</div>
				</div>
			</Container>
		</div>
		);
	}
}
 
export default Users;