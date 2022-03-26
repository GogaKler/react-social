import React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/auth_reducer";
import Header from "./Header";


const HeaderContainer = (props) => {
	return(
		<Header {...props}/>
	)
}

let mapStateToProps = (state) => {
	return {
		id: state.auth.id,
		isAuth: state.auth.isAuth,
		login: state.auth.login,
		sidebar: state.sidebar,
	}
}


export default connect(mapStateToProps, { logout })(HeaderContainer)