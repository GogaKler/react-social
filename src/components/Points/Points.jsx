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
				<Route path="/profile/" element={<Profile
					store = {props.store}
						/>} />

				<Route path="/dialogs/*" element={<Dialogs
					store = {props.store}
					/>} />

			</Routes>
		</section >
	)
}

export default Points;