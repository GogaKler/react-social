import './../../../css/dialogs-point.css'
import { Row, Col } from 'react-bootstrap';
import DialogItem from './DialogMenu/DialogMenu';
import Message from './Message/Message';
import DialogMenu from './DialogMenu/DialogMenu';

const Dialogs = (props) => {


	let messageElements = props.MessagesData.map(el => <Message id={el.id} name={el.name} message={el.message} />)

	return (
		<div className='point__dialogs'>
			<div className='point-name'>Диалоги</div>
			<div className='point__dialogs--content'>
				<Row>
					<Col md={3}>
						<DialogMenu DialogsItemData={props.DialogsItemData}/>		
					</Col>
					<Col md={9}>
						{messageElements}
					</Col>
				</Row>
			</div>

		</div>
	)
}

export default Dialogs;
