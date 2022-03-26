import React from 'react';
import { Route, Routes } from 'react-router-dom';
// POINTS 
import Dialogs from './Dialogs/Dialogs';
import ProfileContainer from './Profile/ProfileContainer';
import UsersContainer from './Users/UsersContainer';
// css
import '../css/login-point.css'
import '../css/profile-point.css'
import Login from './Login/Login'

const Pages = (props) => {
	return (
		<section className="point" >
			<Routes>

				<Route path={"/login/"}
					element={<Login />}
				/>

				<Route path="/profile" element={<ProfileContainer />}>
					<Route path=":userId" element={<ProfileContainer />} />
				</Route>

				<Route path="/dialogs/"
					element={<Dialogs store={props.store} />}
				/>

				<Route path="/users/"
					element={<UsersContainer />}
				/>

			</Routes>
		</section >
	)
}

export default Pages;