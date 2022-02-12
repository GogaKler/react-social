import Menu from "./Menu/Menu";
import Post from "./Post/Post";

const MyPosts = (props) => {
	let PostElements = props.data.PostData.map(el =>
		<Post
			firstName={el.firstName}
			lastName={el.lastName}
			date={el.date}
			postTitle={el.postTitle}
			postDesc={el.postDesc}
			likesCount={el.likesCount}
			commentsCount={el.commentsCount}

		/>)

	return (

		<div className='myPosts'>
			<Menu />
			{PostElements}
		</div>
	)
}

export default MyPosts;