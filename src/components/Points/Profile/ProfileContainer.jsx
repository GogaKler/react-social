import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile, setUserProfle } from "../../../redux/profile_reducer";
import { compose } from "redux";
import { withAuthRedirect, withRouter } from "../../../hoc/hoc";


class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match ? this.props.match.params.userId : 22553
		this.props.getUserProfile(userId)
	}
	
	render() {
		return <Profile {...this.props} />
	}
}

// const ProfileContainer = (props) => {
// 	let userId = props.match ? props.match.params.userId : 22553
// 	useEffect(() => props.getUserProfile(userId))
// 	return <Profile {...props} />
// }

let mapStateToProps = (state) => {
	return {
		id: state.auth.id,
		userProfile: state.profile.userProfile,
	}
}


export default compose(
	withRouter,
	withAuthRedirect,
	connect(mapStateToProps, { setUserProfle, getUserProfile }),
)(ProfileContainer)
