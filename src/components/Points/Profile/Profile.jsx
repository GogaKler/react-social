// Point-Profile
import './../../../css/profile-point.css';
import { Container } from 'react-bootstrap';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileNavbar from './ProfileNavbar/ProfileNavbar';
import MyPosts from './MyPosts/MyPosts';
import CurrentUserContainer from './CurrentUser/CurrentUserContainer';


const Profile = (props) => {
	return (
		<div className="point__profile">
			<div className="profile">
				<ProfileHeader />

				<div className="profile__content">
					<ProfileNavbar />

					<Container>
						<div className='profile__info-block'>
							<CurrentUserContainer store = {props.store}/>
							<MyPosts store = {props.store} />
						</div>
					</Container>
				</div>
			</div>
		</div >
	)
}

export default Profile;