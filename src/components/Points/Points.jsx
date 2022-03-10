import React from 'react';
import { Route, Routes } from 'react-router-dom';
// POINTS 
import Dialogs from './Dialogs/Dialogs';	
import Login from './Login/Login';
import ProfileContainer from './Profile/ProfileContainer';
import UsersContainer from './Users/UsersContainer';
// css
import './../../css/profile-point.css'
import './../../css/login-point.css'


const Points = (props) => {

	return (

		<section className="point" >
			<Routes>
				<Route path="/profile/*"
					element={<ProfileContainer />}
				/>

				<Route path="/dialogs/" 
				element={<Dialogs store={props.store} />} 
				/>

				<Route path="/users/" 
				element={<UsersContainer />}
				/>

				<Route path="/login/" 
				element={<Login />}
				/>

			</Routes>
		</section >
	)
}

export default Points;