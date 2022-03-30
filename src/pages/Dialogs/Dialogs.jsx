import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/hoc';
import '../../css/dialogs-point.css'
import Chat from './Chat/Chat';
import DialogsList from './DialogsList/DialogsList';

const Dialogs = (props) => {
	return (
		<div className='point__dialogs'>
			<DialogsList />
			<Chat />
		</div>
	)
}



export default compose(withAuthRedirect)(Dialogs);
