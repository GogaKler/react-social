import Profile_info from "./Profile_info/Profile_info";
import My_posts from "./My_post/My_post";
import Post from "./Post/Post";


const Profile = () => {
	return (
		<div className="profile-point">
			{/* profile */}
			<Profile_info />

			{/* My_posts */}
			<My_posts />

			{/* posts */}
			<Post
				name="Петр Власович"
				post__title="Изучаем ReactJs"
				post__desc="Интересная штука"
			/>
			<Post
				name="Егор Колесников"
				post__title="Катаю в кс"
				post__desc="Сливаю катки за 50рублей"
			/>
			<Post
				name="Кристина Костикова"
				post__title="Работаю"
				post__desc="Лучше не спрашиваете зачем"
			/>
			<Post
				name="Евгений Козлов"
				post__title="ЕБАШУ НА РАБОТЕ. ЗАЕБАЛСЯ"
				post__desc="В теме поста всё уже сказал"
			/>

		</div>
	)
}

export default Profile;