import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToPropsRedirect = (state) => {
	return{
		id: state.auth.id,
		isAuth: state.auth.isAuth
	}
}
export const withAuthRedirect = (Component) => {
	let RedirectComponent = (props) => {
		if (!props.isAuth) return <Navigate to='/login' />
		return <Component {...props} /> 
	}
	const ConnectRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent);
	return ConnectRedirectComponent;
}
