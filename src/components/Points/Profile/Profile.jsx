// Point-Profile
import './../../../css/profile-point.css';
import { Container } from 'react-bootstrap';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileNavbar from './ProfileNavbar/ProfileNavbar';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import CurrentUser from './CurrentUser/CurrentUser';
import { PreloaderGhost } from '../../common/Preloaders/Preloaders';


const Profile = (props) => {

	if(!props.userProfile) {
		return (
			<div className="loadingPage">
				<PreloaderGhost />
				<div className="loadingPage__text">Загрузка...</div>
			</div>
		)
	}

	return (
		<div className="point__profile">
			<div className="profile">
				<ProfileHeader />

				<div className="profile__content">
					<ProfileNavbar />

					<Container>
						<div className='profile__info-block'>
							<CurrentUser {...props}/>
							<MyPostsContainer />
						</div>
					</Container>
				</div>
			</div>
		</div >
	)
}

export default Profile;