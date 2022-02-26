import React from "react";
import Menu from "./Menu/Menu";
import Post from "./Post/Post";

const MyPosts = (props) => {
	let PostElements = props.PostData.map(el =>
		<Post
			firstName={el.firstName}
			lastName={el.lastName}
			date={el.date}
			postTitle={el.postTitle}
			postDesc={el.postDesc}
			likesCount={el.likesCount}
			commentsCount={el.commentsCount}
			key={el.id}
		/>)

		let NewPostElementTitle = React.createRef();
		let NewPostElementDesc = React.createRef();
	
		let addPost = () => {
			props.addPost();
		}
	
		let onChangePost = () => {
			let newPostTitle = NewPostElementTitle.current.value;
			let newPostDesc = NewPostElementDesc.current.value;
	
			props.updateNewPostText(newPostTitle, newPostDesc)
		}

	return (

		<div className='myPosts'>
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
					rows="2">
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
			<Menu />
			{PostElements}
		</div>
	)
}

export default MyPosts;