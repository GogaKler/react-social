import { profileApi } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initalState = {
	PostData: [
		{ id: "1", firstName: "Егор", lastName: "Колесников", date: "28 фев.", likesCount: "100", commentsCount: "10", postTitle: "Таким образом укрепление и развитие...", postDesc: "Таким образом укрепление и развитие структуры способствует подготовки и реализации дальнейших направлений развития. Равным образом рамки и место обучения кадров позволяет оценить значение форм развития. Идейные соображения высшего порядка, а также консультация с широким активом влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Не следует, однако забывать, что консультация с широким активом в значительной степени обуславливает создание модели развития.	" },
	],
	userProfile: undefined,
	status: '',
}

const ProfileReducer = (state = initalState, action) => {

	switch (action.type) {
		case ADD_POST:	
			return {
				...state,
				PostData: [
					{
						id: "4",
						date: "28 фев.",
						postTitle: action.title,
						postDesc: action.desc,
					},
				...state.PostData],
			};
		case SET_USER_PROFILE:
			return{ ...state, userProfile: action.profile }
		case SET_USER_STATUS:
			return{ ...state, status: action.status }
		default:
			return state
	}
}

export const addPost = (title, desc) =>	({type: ADD_POST, title, desc});
export const updateNewPostText = (newPostTitle, newPostDesc) => ({ type: UPDATE_NEW_POST_TEXT, NewPostTitle: newPostTitle, NewPostDesc: newPostDesc});
export const setUserProfile = (profile) =>({type: SET_USER_PROFILE, profile}) ;
export const setUserStatus = (status) =>({type: SET_USER_STATUS, status}) ;

// Thunks
export const getUserStatus = (userId) => {
	return (dispatch) => {
		profileApi.getUserStatus(userId).then(data => {
			dispatch(setUserStatus(data));
		});	
	}
}
export const updateUserStatus = (status) => {
	return (dispatch) => {
		profileApi.updateUserStatus(status).then(data => {
			if (data.resultCode === 0){
				dispatch(setUserStatus(status));
			}
		});	
	}
}
export const getUserProfile = (userId) => {
	return (dispatch) => {
		profileApi.getUserProfile(userId).then(data => {
			dispatch(setUserProfile(data));
		});	
	}
}

export default ProfileReducer;