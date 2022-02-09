import { Col, Container, Row } from "react-bootstrap";

const Header = () => {
	return (
		<header className="header">
			<Container>
				<Row className="header__wrapper">

					{/* Logo */}
					<Col md={2}>
						<div className="logo">
							<i className="logo__img bi bi-phone-fill"></i>
							<span className="logo__text">ReactSocial</span>
						</div>
					</Col>
					{/* Logo */}

					{/* search */}
					<Col md={6}>
						<form className="search">
							<input
								className="input"
								type="text"
								placeholder="Поиск"
							/>
							<button className="button search__button" type="sumbit"></button>
						</form>
					</Col>
					{/* search */}

					{/* info-top */}
					<Col md={4}>
						<div className="info-top">
							<div className="user-name">Егор Колесников</div>
							<div className="user-img__wrapper">
								<img className="user-img" src="https://a.d-cd.net/1a424f2s-960.jpg" alt="" />
							</div>
						</div>
					</Col>
					{/* info-top */}

				</Row>
			</Container>
		</header>
	)
}

export default Header;