import { Col, Row } from "react-bootstrap";

const Post = (props) => {
	return (
		<div className='post'>
			<Row>
				<Col md={2}>
					<div className="post__human">
						<div className="post__human-name">{props.name}</div>
						<div className="avatar">
							<img className="avatar__img" src="https://a.d-cd.net/1a424f2s-960.jpg" alt="" />
						</div>
					</div>
				</Col>

				<Col md={10}>
					<div className="post__wrapper">
						<div className="post__title">{props.post__title}</div>
						<div className="post__desc">{props.post__desc}</div>
						<div className="button-wrapper">
							<button className="button post__button" type="submit" >Открыть</button>
						</div>
					</div>
				</Col>

			</Row>
		</div>
	)
}

export default Post;