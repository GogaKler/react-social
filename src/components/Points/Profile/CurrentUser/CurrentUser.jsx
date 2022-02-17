import React from "react";

const CurrentUser = (props) => {
		
	let NewPostElementTitle = React.createRef();
	let NewPostElementDesc = React.createRef();

	let addPost = () => {
		props.addPost();
	}

	let onChangePost = () => {
		let newPostTitle = NewPostElementTitle.current.value;
		let newPostDesc = NewPostElementDesc.current.value;

		props.onChangePost(newPostTitle, newPostDesc)
	}


	return (
		<div className='currentUser-sendPost'>
			<div className='currentUser__img--profile'>
				<img className="currentUser__img" src="https://steamuserimages-a.akamaihd.net/ugc/1698402776116313451/993A8BB58E84D0960A398BF731A257A4DB09F261/" alt="" />
			</div>
			<div className='currentUser__FirstName-LastName'>
				<span className='currentUser-FirstName'>Егор&nbsp;</span>
				<span className='currentUser-LastName'>Колесников</span>
				<i className="bi bi-circle-fill"></i>
			</div>
			<div className='currentUser-statusMood'><span>I`ts a pity that only women cal rule chaos</span></div>
			<div className='currentUser-infoPoints'>
				<div className='currentUser-point user-city'>
					<i className="bi bi-house-door"></i>
					<span className='currentUser_text'>Москва</span>
				</div>
				<div className='currentUser-point user-dateOfBirth'>
					<i className="bi bi-balloon"></i>
					<span className='currentUser_text'>6 ноября 2001</span>
				</div>
			</div>
			<div className="profile__send-message">
				<button className='button profile__send-button'>Написать сообщение</button>
			</div>

			<div className="sendPost">
				<div className='sendPost__title'>Что у вас нового?</div>

				<textarea
					onChange={onChangePost}
					ref={NewPostElementTitle}
					value={props.NewPostTitle}
					resize="none"
					placeholder='Введите название поста...'
				>
				</textarea>

				<textarea
					onChange={onChangePost}
					ref={NewPostElementDesc}
					value={props.NewPostDesc}
					resize="none"
					placeholder='Напишите что-нибудь...'
					rows="10">
				</textarea>

				<div className="sendPost__send">
					<button
						onClick={addPost}
						className='sendPost__button button'
					>
						Опубликовать
					</button>
				</div>
			</div>
		</div>
	)
}

export default CurrentUser;