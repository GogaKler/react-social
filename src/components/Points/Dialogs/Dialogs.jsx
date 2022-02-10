import './../../../css/dialogs-point.css'
import { Row, Col } from 'react-bootstrap';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

	let dialogElements = props.DialogsItemData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />)
	let messageElements = props.MessagesData.map(el => <Message id={el.id} name={el.name} message={el.message} />)
	
	return (
		<div className='point__dialogs'>
			<div className='point-name'>Диалоги</div>
			<Row>
				<Col md={3}>
					{dialogElements}
				</Col>
				<Col md={9}>
					{messageElements}
					{/* <Message name={MessagesData[0].name} message={MessagesData[0].message} /> */}
				</Col>
			</Row>
		</div>
	)
}

export default Dialogs;
