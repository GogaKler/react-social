import userPhoto from '../../../../assets/images/user.jpg'
import UserStatus from './UserStatus/UserStatus';

const CurrentUser = (props) => {

	return (
		
		<div className='currentUser-sendPost'>
			<div className='currentUser__img--profile'>
				<img className="currentUser__img" src={!props.userProfile.photos.large ? userPhoto : props.userProfile.photos.large} alt="" />	
			</div>
			<div className='currentUser__FirstName-LastName'>
				<span className='currentUser-FirstName'>{props.userProfile.fullName}</span>
				<i className="bi bi-circle-fill"></i>
			</div>
			<UserStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
			<div className='currentUser-infoPoints'>
				<div className='currentUser-point user-city'>
					<i className="bi bi-house-door"></i>
					<span className='currentUser_text'>Москва</span>
				</div>
				<div className='currentUser-point user-dateOfBirth'>
					<i className="bi bi-balloon"></i>
					<span className='currentUser_text'>6 ноября 2001</span>
				</div>
			</div>
			<div className="profile__send-message">
				<button className='button profile__send-button'>Написать сообщение</button>
			</div>


		</div>
	)
}

export default CurrentUser;