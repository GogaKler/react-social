import { Container, Row, Col } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
// POINTS 
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';



const Points = (props) => {
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
						<div className='point'>
							<Routes>
								<Route path="/profile/" element={<Profile PostData={props.PostData} />} />
								<Route path="/dialogs/*" element={<Dialogs DialogsItemData={props.DialogsItemData} MessagesData={props.MessagesData} />} />
							</Routes>
						</div>
					</Col>

				</Row>
			</Container>
		</section>
	)
}

export default Points;