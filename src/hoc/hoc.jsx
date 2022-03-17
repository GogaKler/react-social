import React from "react";
import { connect } from "react-redux";
import { Navigate, useMatch } from "react-router-dom";

let mapStateToPropsRedirect = (state) => {
	return{
		isAuth: state.auth.isAuth
	}
}

export const withRouter = (Component) => (props) => {
	const match = useMatch('/profile/:userId/');
	return <Component {...props} match={match} />;
}

export const withAuthRedirect = (Component) => {
	let RedirectComponent = (props) => {
		if (!props.isAuth) return <Navigate to='/login' />
		return <Component {...props} /> 
		
	}
	const ConnectRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent);
	return ConnectRedirectComponent;
}

// export const withAuthRedirect = (Component) => {
// 	class RedirectComponent extends React.Component {
// 		render(){
// 			if (!this.props.isAuth) return <Navigate to = '/login' />
// 			return <Component {...this.props} />
// 		}
// 	}

// 	let ConnectRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent);
// 	return ConnectRedirectComponent;
// }