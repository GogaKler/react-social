const Profile = () => {
	return (
		<div className="content">
			<div className="content-img">
				<img src="https://w-dog.ru/wallpapers/16/14/374290932556223/sobaka-chernaya-vzglyad-fon.jpg" alt="" width={400} />
			</div>

			<div className="profile">
				<div className="row">
					<div className="col-md-2">
						<div className="profile__img">
							<img width="150" src="https://a.d-cd.net/1a424f2s-960.jpg" alt="Avatar" />
						</div>
					</div>
					<div className="col-md-10">
						<div className="profile__desc">
							<div className="profile__name">Егор Колесников</div>
							<div className="profile__date-of-birth">Дата рождения: 06.11.2001</div>
							<div className="profile__city">Город: Москва</div>
							<div className="profile__mood">Настроение: Жиганить</div>
						</div>
					</div>
				</div>
			</div>

			<div className="posts">
				<div className="posts-title">Мои посты</div>
				<div className="posts-input">
					<div className="posts-input__text">Напишите пост...</div>
				</div>
				<div className="send">
					<button className="button post-send">Опубликовать</button>
				</div>

			</div>

		</div>
	)
}

export default Profile;