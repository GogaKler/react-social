import './../../../css/dialogs-point.css'
import { Row, Col } from 'react-bootstrap';
import Message from './Message/Message';
import DialogMenu from './DialogMenu/DialogMenu';
import Message__textarea from './Message__textarea/Message__textarea';

const Dialogs = (props) => {


	let messageElements = props.data.MessagesData.map(el => <Message id={el.id} name={el.name} message={el.message} />)

	return (
		<div className='point__dialogs'>
			<div className='point-name'>Диалоги</div>
			<div className='point__dialogs--content'>
				<Row>
					<Col md={3}>
						<DialogMenu DialogsItemData={props.data.DialogsItemData}/>		
					</Col>
					<Col md={9}>
						{messageElements}
						<Message__textarea />
					</Col>
				</Row>
			</div>

		</div>
	)
}

export default Dialogs;
