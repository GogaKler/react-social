import { PreloaderGhost } from "../../../common/Preloaders/Preloaders";

const CurrentUser = (props) => {

	if(!props.userProfile) {
		return <PreloaderGhost />
	}

	return (
		
		<div className='currentUser-sendPost'>
			<div className='currentUser__img--profile'>
				<img className="currentUser__img" src={props.userProfile.photos.large} alt="" />	
			</div>
			<div className='currentUser__FirstName-LastName'>
				<span className='currentUser-FirstName'>{props.userProfile.fullName}</span>
				{/* <span className='currentUser-LastName'>Колесников</span> */}
				<i className="bi bi-circle-fill"></i>
			</div>
			<div className='currentUser-statusMood'><span>{props.userProfile.aboutMe}</span></div>
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