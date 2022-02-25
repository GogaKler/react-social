import React from 'react'
import userPhoto from './../../../../assets/images/user.jpg'

const User = (props) => {
		return (
			<div className="user-wrapper">
				<div className="user">
					<div className="user-image">
						<img
							className="currentUser__img"
							src={props.photosSmall != null ? props.photosSmall : userPhoto}
							alt='user'
						/>
					</div>

					<div className="user-info">
						<div className="user-fullName">
							<span className="user-firstName">{props.name}&nbsp;</span>
						</div>
						<div className="user-status">Статус: {props.status} </div>

					</div>

					<div className="user-follow">
						{props.followed
							? <button onClick={() => props.userFollow(props.id)} className="button user-follow__button-unSubscribe">Удалить из друзей</button>
							: <button onClick={() => props.userFollow(props.id)} className="button user-follow__button-subscribe">Добавить в друзья</button>}
					</div>
				</div>
			</div>
		)
}

export default User;