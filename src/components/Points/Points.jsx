import React from 'react';
import { Route, Routes } from 'react-router-dom';
// POINTS 
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';



const Points = (props) => {
	
	return (
		
		<section className = "point" >
			<Routes>
				{/* Points */ }
				<Route path="/profile/"
					element={<Profile
					data={props.state.profile}
					dispatch={props.dispatch}
						/>} />

				<Route path="/dialogs/*"
					element={<Dialogs
					dialogsData={props.state.dialogs}
					dispatch={props.dispatch} />} />

			</Routes>
		</section >
	)
}

export default Points;