import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile, getUserStatus, setUserProfile, updateUserStatus, updateNewPostText, addPost} from "../../redux/profile-reducer";
import { compose } from "redux";
import {useNavigate, useParams } from "react-router-dom";
import { savePhoto } from './../../redux/profile-reducer';


const ProfileContainer = ({authorizedUserId, getUserProfile, getUserStatus, ...props}) => {
	const params = useParams()
	const navigate = useNavigate();
	let userId = params.userId
	useEffect(() => {
		let userId = params.userId
		if (!userId) {
			userId = authorizedUserId
				if(!userId) {
					navigate('/login')
				}
		}
		getUserProfile(userId)
		getUserStatus(userId)
	}, [getUserProfile, getUserStatus, authorizedUserId, navigate, params.userId]) 

	return(
		<Profile {...props} isOwner={!userId} />
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
	connect(mapStateToProps, { setUserProfile, getUserProfile, getUserStatus, updateUserStatus, updateNewPostText, addPost, savePhoto }),
)(ProfileContainer)
