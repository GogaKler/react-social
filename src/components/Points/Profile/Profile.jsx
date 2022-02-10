// Point-Profile
import './../../../css/profile-point.css';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import Post from "./Post/Post";


const Profile = (props) => {
	let PostElements = props.PostData.map ( el => <Post name={el.name} post__title={el.post__title} post__desc={el.post__desc} />)

	return (
		<div className="point__profile">
			{/* profile */}
			<ProfileInfo />

			{/* My_posts */}
			<MyPosts />

			{/* posts */}
			{PostElements}

		</div>
	)
}

export default Profile;