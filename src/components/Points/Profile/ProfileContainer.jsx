import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import * as axios from 'axios'
import { setUserProfle } from "../../../redux/profile_reducer";
import { useMatch } from "react-router-dom";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match ? this.props.match.params.userId : '2'
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}` ).then(response => {
			this.props.setUserProfle(response.data)
		});
	}
	render() { 
		return (
			<Profile {...this.props}/>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		userProfile: state.profile.userProfile
	}
}

const ProfileURLMatch = (props) => {
	const match = useMatch('/profile/:userId/');
	return <ProfileContainer {...props} match={match} />;
}

export default connect(mapStateToProps, {setUserProfle})(ProfileURLMatch)