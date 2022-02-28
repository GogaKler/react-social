import React from "react";
import { connect } from "react-redux";
import { SetToggleMenu } from "../../redux/sidebar_reducer";
import { setAuthUserData, setIsAuth } from "../../redux/auth_reducer";
import Sidebar from "./Sidebar";
import * as axios from 'axios'



class SidebarContainer extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
			let {id, email, login} = response.data.data;
			if ( response.data.resultCode === 0) {
				this.props.setAuthUserData(id, email, login)
				this.props.setIsAuth(true)
			} else {
				this.props.setIsAuth(false)
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
	return{
		isAuth: state.auth.isAuth,
		login: state.auth.login,
		sidebar: state.sidebar,
	}
}

export default connect(mapStateToProps, {SetToggleMenu, setAuthUserData, setIsAuth})(SidebarContainer)