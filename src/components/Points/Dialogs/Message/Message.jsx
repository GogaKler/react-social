import { Row, Col } from "react-bootstrap";

const Message = (props) => {
	return (
		<div className='messages-window__wrapper'>
			<div className='message'>
				<Row>
					<Col md={1}>
						<img className='message__user-img' src="https://a.d-cd.net/1a424f2s-960.jpg" alt="" />
					</Col>
					<Col md={11}>
						<div className='message__user-name'>{props.name}</div>
						<div className="message__text">{props.message}</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Message;