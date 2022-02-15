// Point-Profile
import './../../../css/profile-point.css';
import { Container } from 'react-bootstrap';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileNavbar from './ProfileNavbar/ProfileNavbar';
import CurrentUser from './CurrentUser/CurrentUser';
import MyPosts from './MyPosts/MyPosts';


const Profile = (props) => {
	return (
		<div className="point__profile">
			<div className="profile">
				<ProfileHeader />

				<div className="profile__content">
					<ProfileNavbar />

					<Container>
						<div className='profile__info-block'>
							<CurrentUser
								NewPostTitle={props.data.NewPostTitle}
								NewPostDesc={props.data.NewPostDesc}
								dispatch={props.dispatch}
							/>
							<MyPosts data={props.data} />
						</div>
					</Container>
				</div>
			</div>
		</div >
	)
}

export default Profile;