import React from "react";
import { connect } from "react-redux";
import { useMatch } from "react-router-dom";
import Profile from "./Profile";
import { getUserProfile, setUserProfle } from "../../../redux/profile_reducer";


class ProfileContainer extends React.Component {
	
		componentDidMount() {
			this.props.getUserProfile(this.props.match)
		}

	render() { 
		return (
			<Profile {...this.props}/>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		id: state.auth.id,
		userProfile: state.profile.userProfile,
	}
}

const ProfileURLMatch = (props) => {
	const match = useMatch('/profile/:userId/');
	return <ProfileContainer {...props} match={match} />;
}

export default connect(mapStateToProps, {setUserProfle, getUserProfile})(ProfileURLMatch)