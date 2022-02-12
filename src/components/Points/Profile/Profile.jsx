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
							<CurrentUser addPost = {props.addPost} />	
							<MyPosts data={props.data}/>
						</div>
					</Container>
				</div>

			</div>
			{/* <ProfileInfo />
			<MyPosts__textarea />
			{PostElements} */}
		</div >
	)
}

export default Profile;