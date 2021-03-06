import { profileApi } from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const UPDATE_NEW_POST_TEXT = 'profile/UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_USER_STATUS = 'profile/SET_USER_STATUS'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'

let initalState = {
	PostData: [
		{ id: "1", firstName: "Егор", lastName: "Колесников", date: "28 фев.", likesCount: "100", commentsCount: "10", postTitle: "Далеко-далеко за словесными горами в стране.", postDesc: " Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Дорогу он грамматики строчка рот щеке имени агентство пустился свой имеет заманивший решила образ необходимыми осталось злых от всех коварный океана мир, сих напоивший его которой. Предложения, рыбными толку диких lorem родного дорогу запятых власти щеке буквенных то запятой живет которое." },
	],
	userProfile: null,
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
			return { ...state, userProfile: action.profile }
		case SET_USER_STATUS:
			return { ...state, status: action.status }
		case SAVE_PHOTO_SUCCESS:
			return { ...state, userProfile: {...state.userProfile, photos: action.photos} }
		default:
			return state
	}
}

export const addPost = (title, desc) => ({ type: ADD_POST, title, desc });
export const updateNewPostText = (newPostTitle, newPostDesc) => ({ type: UPDATE_NEW_POST_TEXT, NewPostTitle: newPostTitle, NewPostDesc: newPostDesc });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})


// Thunks
export const getUserStatus = (userId) => async (dispatch) => {
	let data = await profileApi.getUserStatus(userId)
	dispatch(setUserStatus(data));
}

export const updateUserStatus = (status) => async (dispatch) => {
	let data = await profileApi.updateUserStatus(status)
	if (data.resultCode === 0) {
		dispatch(setUserStatus(status));
	}
}
export const getUserProfile = (userId) => async (dispatch) => {
	let data = await profileApi.getUserProfile(userId)
	dispatch(setUserProfile(data));
}

export const savePhoto = (file) => async (dispatch) => {
	let data = await profileApi.savePhoto(file)
	if(data.resultCode === 0){
		dispatch(savePhotoSuccess(data.data.photos))
	}
}


export default ProfileReducer;