import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToProps = (state) => (
	{
		isAuth: state.auth.isAuth
	}
)


export const withAuthRedirect = (Component) => {
	let RedirectComponent = ({isAuth, ...props}) => {
		if (!isAuth) return <Navigate to='/login' />
		return <Component {...props} /> 
	}
	let ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent);
	return ConnectRedirectComponent;
}
