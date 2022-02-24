import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../redux/profile_reducer";
import { connect } from 'react-redux'
import CurrentUser from './CurrentUser'

let mapStateToProps = (state) => {
	return {
		NewPostTitle: state.profile.NewPostTitle,
		NewPostDesc: state.profile.NewPostDesc,
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPostActionCreator())
		},
		onChangePost: (newPostTitle, newPostDesc) => {
			dispatch(updateNewPostTextActionCreator(newPostTitle, newPostDesc))
		},
	}
};

const CurrentUserContainer = connect(mapStateToProps, mapDispatchToProps)(CurrentUser);

export default CurrentUserContainer;
