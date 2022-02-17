const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initalState = {
	PostData: [
		{ id: "1", firstName: "Егор", lastName: "Колесников", date: "28 фев.", likesCount: "100", commentsCount: "10", postTitle: "Таким образом укрепление и развитие...", postDesc: "Таким образом укрепление и развитие структуры способствует подготовки и реализации дальнейших направлений развития. Равным образом рамки и место обучения кадров позволяет оценить значение форм развития. Идейные соображения высшего порядка, а также консультация с широким активом влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Не следует, однако забывать, что консультация с широким активом в значительной степени обуславливает создание модели развития.	" },
	],
	NewPostTitle: "",
	NewPostDesc: "",
}

const ProfileReducer = (state = initalState, action) => {
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
			state.NewPostTitle = action.NewPostTitle;
			state.NewPostDesc = action.NewPostDesc;
			return state;
		default:
			return state
	}
}

export const addPostActionCreator = () => {
	return {
		type: ADD_POST,
	};
};
export const updateNewPostTextActionCreator = (newPostTitle, newPostDesc) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		NewPostTitle: newPostTitle,
		NewPostDesc: newPostDesc,
	};
};
export default ProfileReducer;