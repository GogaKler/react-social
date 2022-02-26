import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import * as axios from 'axios'
import { setUserProfle } from "../../../redux/profile_reducer";

class ProfileContainer extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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


export default connect(mapStateToProps, {setUserProfle})(ProfileContainer)