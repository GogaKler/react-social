import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../redux/profile_reducer";
import CurrentUser from './CurrentUser'

const CurrentUserContainer = (props) => {
	let state = props.store.getState().profile;

	let addPost = () => {
		let action = addPostActionCreator();
		props.store.dispatch(action);
	}

	let onChangePost = (newPostTitle, newPostDesc) => {
		let action = updateNewPostTextActionCreator(newPostTitle, newPostDesc);
		props.store.dispatch(action);
	}


	return (
		<CurrentUser 
			onChangePost = {onChangePost}
			addPost = {addPost}
			NewPostTitle = {state.NewPostTitle}
			NewPostDesc = {state.NewPostDesc}
		/>
	)
}

export default CurrentUserContainer;