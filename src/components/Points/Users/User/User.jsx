import React from 'react'
import { NavLink } from 'react-router-dom';
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
						? <button disabled={props.followProgress.some(id => id === props.id)} onClick={ () => { props.unFollow(props.id) } } 
							className="button user-follow__button-unSubscribe">Удалить из друзей</button>
						: <button disabled={props.followProgress.some(id => id === props.id)} onClick={ () => { props.follow(props.id) } } 
							className="button user-follow__button-subscribe">Добавить в друзья</button>
					}
				</div>
			</div>
		</div>
	)
}

export default User;