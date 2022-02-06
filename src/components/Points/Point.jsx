import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './../Sidebar/Sidebar';
import Profile from './Profile/Profile';



const Point = () => {
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
						<Profile />
					</Col>

				</Row>
			</Container>
		</section>
	)
}

export default Point;