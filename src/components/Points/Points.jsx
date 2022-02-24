import React from 'react';
import { Route, Routes } from 'react-router-dom';
// POINTS 
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';
import UsersContainer from './Users/UsersContainer';



const Points = (props) => {

	return (

		<section className="point" >
			<Routes>
				<Route path="/profile/"
					element={<Profile store={props.store} />}
				/>

				<Route path="/dialogs/*" 
				element={<Dialogs store={props.store} />} 
				/>

				<Route path="/users/" 
				element={<UsersContainer />}
				/>

			</Routes>
		</section >
	)
}

export default Points;