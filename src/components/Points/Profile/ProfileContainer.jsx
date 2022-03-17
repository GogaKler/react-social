import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile, getUserStatus, setUserProfile, updateUserStatus } from "../../../redux/profile_reducer";
import { compose } from "redux";
import { withAuthRedirect, withRouter } from "../../../hoc/hoc";


class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match ? this.props.match.params.userId : 22553
		this.props.getUserProfile(userId)
		this.props.getUserStatus(userId)
	}
	
	render() {
		return <Profile {...this.props} />
	}
}

let mapStateToProps = (state) => {

	return {
		id: state.auth.id,
		status: state.profile.status,
		userProfile: state.profile.userProfile,
	}
}


export default compose(
	withRouter,
	connect(mapStateToProps, { setUserProfile, getUserProfile, getUserStatus, updateUserStatus }),
	// withAuthRedirect,
)(ProfileContainer)
