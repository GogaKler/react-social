import React from "react";
import { connect } from "react-redux";
import { SetToggleMenu } from "../../redux/sidebar_reducer";
import { setAuthUserData } from "../../redux/auth_reducer";
import Sidebar from "./Sidebar";
import { authApi } from "../../api/api";



class SidebarContainer extends React.Component {

	componentDidMount() {

		authApi.getAuthUser().then(data => {
			let { id, email, login } = data.data;
			if (data.resultCode === 0){
				this.props.setAuthUserData(id, email, login) 
			}
		});
	}
	

	render() {
		return (
			<Sidebar {...this.props} />
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


export default connect(mapStateToProps, { SetToggleMenu, setAuthUserData })(SidebarContainer)