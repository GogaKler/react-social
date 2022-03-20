import React from 'react';
import { Route, Routes } from 'react-router-dom';
// POINTS 
import Dialogs from './Dialogs/Dialogs';
import ProfileContainer from './Profile/ProfileContainer';
import UsersContainer from './Users/UsersContainer';
// css
import './../../css/profile-point.css'
import './../../css/login-point.css'
import HeaderContainer from '../Header/HeaderContainer';
import Login from '../Login/Login';

const Points = (props) => {
	return (
		<>
			<HeaderContainer switchTheme={props.switchTheme} theme={props.theme} id={props.id}/>

			<section className="point" >
				<Routes>

					<Route path={"/login/"}
						element={<Login />}
					/>

					<Route path={"/profile/*"}
						element={<ProfileContainer />}
					/>
s
					<Route path="/dialogs/"
						element={<Dialogs store={props.store} />}
					/>

					<Route path="/users/"
						element={<UsersContainer />}
					/>

				</Routes>
			</section >
		</>
	)
}

export default Points;