const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => {
	return {
		type: ADD_POST,
	};
};
export const updateNewPostTextActionCreator = (newPostTitle, newPostDesc) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newTextTitle: newPostTitle,
		newTextDesc: newPostDesc
	};
};


const ProfileReducer = (state, action) => {

	switch(action.type) {
		case ADD_POST:
			let newPost = {
				id: "4",
				firstName: "Егор",
				lastName: "Колесников",
				date: "28 фев.",
				likesCount: "0",
				commentsCount: "0",
				postTitle: state.NewPostTitle,
				postDesc: state.NewPostDesc,
			}
			state.PostData.push(newPost);
			state.NewPostTitle = '';
			state.NewPostDesc = '';
			return state;
		case UPDATE_NEW_POST_TEXT:
			state.NewPostTitle = action.newTextTitle;
			state.NewPostDesc = action.newTextDesc;
			return state;
		default:
			return state
	}

}

export default ProfileReducer;