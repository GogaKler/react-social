import './../../../css/dialogs-point.css'
import Chat from './Chat/Chat';
import DialogsList from './DialogsList/DialogsList';

const Dialogs = (props) => {

	return (
		<div className='point__dialogs'>
			<DialogsList />
			<Chat
			dialogsData = {props.dialogsData}
			dispatch={props.dispatch}
			 />
		</div>
	)
}

export default Dialogs;
