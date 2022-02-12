const Post = (props) => {
	return (
		<div className='post'>
			<div className='post__header'>
				<div className='currentUser__img--post'>
					<img className="currentUser__img" src="https://steamuserimages-a.akamaihd.net/ugc/1698402776116313451/993A8BB58E84D0960A398BF731A257A4DB09F261/" alt="" />
				</div>
				<div className='post__FirstName-LastName'>
					<span className='currentUser-FirstName'>{props.firstName}&nbsp;</span>
					<span className='currentUser-LastName'>{props.lastName}</span>
					<i className="bi bi-circle-fill"></i>
				</div>
				<div className='send-date__post'>
					<div className='send-data'>{props.date}</div>
				</div>
			</div>
			<div className='post-text'>
				<div className='post-text__title'>{props.postTitle}</div>
				<div className='post-text__desc'>{props.postDesc}</div>
			</div>
			<div className='post-state'>
				<div className='post-state__point'>
					<i className="bi bi-heart-fill"></i>
					<span className='post-state__likes-count'>{props.likesCount}</span>
				</div>
				<div className='post-state__point'>
					<i className="bi bi-chat"></i>
					<span className='post-state__comments'>{props.commentsCount}</span>
				</div>
			</div>
		</div>
	)
}

export default Post;