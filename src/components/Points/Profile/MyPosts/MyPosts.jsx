const MyPosts = () => {
	return (
		<div className="my_posts">
			<div className="my_posts__title">Мои посты</div>
			<textarea className="my_posts__desc" placeholder="Напишите что-нибудь" rows="2"></textarea>
			<div className="button-wrapper">
				<button className="button my_posts__button" type="submit" >Отправить</button>
			</div>
		</div>
	)
}
export default MyPosts;