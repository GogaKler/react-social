import './../../../css/dialogs-point.css'
import { Row, Col } from 'react-bootstrap';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = () => {

	let DialogsItemData = [
		{ id: "1", name: "Егор Колесников" },
		{ id: "2", name: "Кристина Костикова" },
		{ id: "3", name: "Евгений Козлов" },
		{ id: "4", name: "Валерий Меладзе" },
		{ id: "5", name: "PRO100 ПЕРСИК" },
	];

	let MessagesData = [
		{ id: "1", name: "Егор Колесников", message: "Привет!" },
		{ id: "2", name: "Кристина Костикова", message: "Периск, блять!!!" },
		{ id: "3", name: "Евгений Козлов", message: "Ля, дота суперская же" },
		{ id: "4", name: "Валерий Меладзе", message: "Самба белого..." },
		{ id: "5", name: "PRO100 ПЕРСИК", message: "Бля, а я че, Кристин, че я то блять" },
	]

	let dialogElements = DialogsItemData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />)
	let messageElements = MessagesData.map(el => <Message id={el.id} name={el.name} message={el.message} />)
	
	// let dialogsElements = DialogsItemData.map(
	// 	(dialog) => {
	// 		return (
	// 			<DialogItem name={dialog.name} id={dialog.id} />
	// 		)
	// 	}
	// )

	return (
		<div className='dialogs-point'>
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