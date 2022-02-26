import React from 'react';
import { Route, Routes } from 'react-router-dom';
// POINTS 
import Dialogs from './Dialogs/Dialogs';	
import ProfileContainer from './Profile/ProfileContainer';
import UsersContainer from './Users/UsersContainer';



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

			</Routes>
		</section >
	)
}

export default Points;