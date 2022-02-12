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
						addPost={props.addPost} />} /> {/* Profile PROPS */}

				<Route path="/dialogs/*"
					element={<Dialogs
						data={props.state.dialogs} />} /> {/* Dialogs PROPS */}

			</Routes>
		</section >
	)
}

export default Points;