import { Col, Container, Row } from "react-bootstrap";

const Profile_info = () => {
	return (
		<div className="profile">
			<Row>
				{/* profie img */}
				<Col md={2}>
					<div className="profile__img-wrapper">
						<img className="profile__img" src="https://a.d-cd.net/1a424f2s-960.jpg" alt="" />
					</div>
				</Col>
				{/* profie img */}

				{/* profile desc */}
				<Col md={10}>
					<div className="profile-desc">
						<div className="profile__name">Егор Колесников</div>
						<div className="profile__date-of-birth">Дата рождения: 06.11.2001</div>
						<div className="profile__сity">Город: Москва</div>
						<div className="profile__mood">Настроение: Жиганить</div>
					</div>
				</Col>
				{/* profile desc */}

			</Row>
		</div>
	)
}

export default Profile_info;