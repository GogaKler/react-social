import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile, getUserStatus, setUserProfile, updateUserStatus, updateNewPostText, addPost} from "../../../redux/profile_reducer";
import { compose } from "redux";
import { withRouter } from "../../../hoc/hoc";
import {useNavigate, useParams } from "react-router-dom";


const ProfileContainer = (props) => {
	const params = useParams()
	const navigate = useNavigate();

	useEffect(() => {
		let userId = params.userId
		if (!userId) {
			userId = props.authorizedUserId
				if(!userId) {
					navigate('/login')
				}
		}
		props.getUserProfile(userId)
		props.getUserStatus(userId)

	}, [])
	return(
		<Profile {...props} />
	)

}

let mapStateToProps = (state) => {

	return {
		userProfile: state.profile.userProfile,
		status: state.profile.status,
		posts: state.profile.PostData,
		authorizedUserId: state.auth.id,
		isAuth: state.auth.isAuth,
	}
}


export default compose(
	withRouter,
	connect(mapStateToProps, { setUserProfile, getUserProfile, getUserStatus, updateUserStatus, updateNewPostText, addPost}),
)(ProfileContainer)
