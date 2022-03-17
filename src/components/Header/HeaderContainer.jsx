import React from "react";
import { connect } from "react-redux";
import { SetToggleMenu } from "../../redux/sidebar_reducer";
import { getAuthUser, setAuthUserData } from "../../redux/auth_reducer";
import Header from "./Header";



class HeaderContainer extends React.Component {
	
	componentDidMount() {
		this.props.getAuthUser();
	}
	render() {
		return (
			<Header {...this.props} />
		);
	}
}

let mapStateToProps = (state) => {
	return {
		id: state.auth.id,
		isAuth: state.auth.isAuth,
		login: state.auth.login,
		sidebar: state.sidebar,
	}
}


export default connect(mapStateToProps, { SetToggleMenu, setAuthUserData, getAuthUser })(HeaderContainer)