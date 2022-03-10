import { profileApi } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initalState = {
	PostData: [
		{ id: "1", firstName: "Егор", lastName: "Колесников", date: "28 фев.", likesCount: "100", commentsCount: "10", postTitle: "Таким образом укрепление и развитие...", postDesc: "Таким образом укрепление и развитие структуры способствует подготовки и реализации дальнейших направлений развития. Равным образом рамки и место обучения кадров позволяет оценить значение форм развития. Идейные соображения высшего порядка, а также консультация с широким активом влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Не следует, однако забывать, что консультация с широким активом в значительной степени обуславливает создание модели развития.	" },
	],
	userProfile: null,
	
	NewPostTitle: "",
	NewPostDesc: "",
}

const ProfileReducer = (state = initalState, action) => {

	switch (action.type) {
		case ADD_POST:	
			return {
				...state,
				PostData: [
					{
						id: "4",
						firstName: "Егор",
						lastName: "Колесников",
						date: "28 фев.",
						likesCount: "0",
						commentsCount: "0",
						postTitle: state.NewPostTitle,
						postDesc: state.NewPostDesc,
					},
				...state.PostData],
				NewPostTitle: '',
				NewPostDesc: '',
			};

		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				NewPostTitle: action.NewPostTitle,
				NewPostDesc: action.NewPostDesc
			}
		case SET_USER_PROFILE:
			return{ ...state, userProfile: action.profile }
		default:
			return state
	}
}

export const addPost = () =>	({type: ADD_POST});
export const updateNewPostText = (newPostTitle, newPostDesc) => ({ type: UPDATE_NEW_POST_TEXT, NewPostTitle: newPostTitle, NewPostDesc: newPostDesc});
export const setUserProfle = (profile) =>({type: SET_USER_PROFILE, profile}) ;

// Thunks
export const getUserProfile = (userId) => {
	return (dispatch) => {
		profileApi.getUserProfile(userId).then(data => {
			dispatch(setUserProfle(data));
		});	
	}
}

export default ProfileReducer;