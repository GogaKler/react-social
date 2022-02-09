import { Container, Row, Col } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
// POINTS 
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';



const Points = () => {
	return (
		<section className="app app-wrapper">
			<Container>
				<Row>
					{/* sidebar */}
					<Col md={2}>
						<Sidebar />
					</Col>

					{/* Points */}
					<Col md={10}>
						<Routes>
							<Route path="/profile/" element={<Profile />} />
							<Route path="/dialogs/*" element={<Dialogs />} />
						</Routes> 
					</Col>

				</Row>
			</Container>
		</section>
	)
}

export default Points;