import { Navigate } from 'react-router-dom';
import './../../../css/dialogs-point.css'
import Chat from './Chat/Chat';
import DialogsList from './DialogsList/DialogsList';

const Dialogs = (props) => {
  if (props.store.getState().auth.isAuth === false) return <Navigate to='/login' />
	return (
		<div className='point__dialogs'>
			<DialogsList />
			<Chat
				store = {props.store}
			 />
		</div>
	)
}

export default Dialogs;
