import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import * as axios from 'axios'
import { useMatch } from "react-router-dom";
import { setUserProfle } from "../../../redux/auth_reducer";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match ? this.props.match.params.userId : this.props.id
		debugger;
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
		id: state.auth.id,
		userProfile: state.auth.userProfile,
	}
}

const ProfileURLMatch = (props) => {
	const match = useMatch('/profile/:userId/');
	return <ProfileContainer {...props} match={match} />;
}

export default connect(mapStateToProps, {setUserProfle})(ProfileURLMatch)