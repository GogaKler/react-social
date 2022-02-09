// Point-Profile
import './../../../css/profile-point.css';

import Profile_info from "./Profile_info/Profile_info";
import My_posts from "./My_post/My_post";
import Post from "./Post/Post";


const Profile = () => {

	let PostData = [
		{id: "1", name: "Егор Колесников", post__title: "Изучаем ReactJs", post__desc: "Интересная штука"},
		{id: "2", name: "Егор Колесников", post__title: "Продолжаем обучение..", post__desc: "Сегодня уже поинтреснее"},
		{id: "3", name: "Егор Колесников", post__title: "1:49", post__desc: "устал."},
		{id: "3", name: "Егор Колесников", post__title: "Похоже понял (.map)", post__desc: "Продолжаем нэхооооой"},
	]
	
	let PostElements = PostData.map ( el => <Post name={el.name} post__title={el.post__title} post__desc={el.post__desc} />)

	return (
		<div className="profile-point">
			{/* profile */}
			<Profile_info />

			{/* My_posts */}
			<My_posts />

			{/* posts */}
			{PostElements}

		</div>
	)
}

export default Profile;