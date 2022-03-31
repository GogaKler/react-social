import React from 'react'
import { NavLink } from 'react-router-dom';
import userPhoto from '../../../assets/images/user.jpg'
import { Button } from './../../../components_style/components/Button/Button';

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
						? <Button transparent disabled={props.followProgress.some(id => id === props.id)} onClick={ () => { props.unFollow(props.id) } } 
							>Удалить из друзей</Button>
						: <Button transparent second disabled={props.followProgress.some(id => id === props.id)} onClick={ () => { props.follow(props.id) } } 
							>Добавить в друзья</Button>
					}
				</div>
			</div>
		</div>
	)
}

export default User;