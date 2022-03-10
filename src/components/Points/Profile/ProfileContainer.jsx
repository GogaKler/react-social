import React from "react";
import { connect } from "react-redux";
import { Navigate, useMatch } from "react-router-dom";
import Profile from "./Profile";
import { getUserProfile, setUserProfle } from "../../../redux/profile_reducer";


class ProfileContainer extends React.Component {
	
		componentDidMount() {
			let userId = this.props.match ? this.props.match.params.userId : 22553
			this.props.getUserProfile(userId)
		}

	render() {
		if (this.props.isAuth == false ) return <Navigate to='/login' />
		return (
			<Profile {...this.props}/>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		id: state.auth.id,
		userProfile: state.profile.userProfile,
	}
}

const ProfileURLMatch = (props) => {
	const match = useMatch('/profile/:userId/');
	return <ProfileContainer {...props} match={match} />;
}

export default connect(mapStateToProps, {setUserProfle, getUserProfile})(ProfileURLMatch)