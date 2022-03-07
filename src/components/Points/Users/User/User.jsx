import * as axios from 'axios';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { followApi } from '../../../../api/api';
import userPhoto from './../../../../assets/images/user.jpg'

const User = (props) => {
	return (
		<div className="user-wrapper">
			<div className="user">

				<div className="user-image">
					<NavLink to={'/profile/' + props.id}>
						<img
							className="currentUser__img"
							src={props.photosSmall != null ? props.photosSmall : userPhoto}
							alt='user'
						/>
					</NavLink>
				</div>


				<div className="user-info">
					<NavLink to={'/profile/' + props.id}>
						<div className="user-fullName">
							<span className="user-firstName">{props.name}&nbsp;</span>
						</div>
					</NavLink>
					<div className="user-status">Статус: {props.status} </div>

				</div>

				<div className="user-follow">
					{props.followed
						? <button onClick={() => {
							followApi.deleteFollow(props.id).then(data => {
								debugger;
								if (data.resultCode === 0) {
									props.userFollow(props.id)
								}
							})
						}


						} className="button user-follow__button-unSubscribe">Удалить из друзей</button>
						: <button onClick={() =>{
							followApi.getFollow(props.id).then(data => {
								if (data.resultCode === 0 ){
									props.userFollow(props.id)
								}
							})
						}

							
						} className="button user-follow__button-subscribe">Добавить в друзья</button>}
				</div>
			</div>
		</div>
	)
}

export default User;