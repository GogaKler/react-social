const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initalState = {
	Messages: {
		FirstMessages: [],
		LastMessages: [
			{ id: '1', text: 'Салам Алейкум, брат, как дела?', time: '10:00' }
		],
		MessageText: '',
	}
};

const DialogsReducer = (state = initalState, action) => {
	let stateCopy ={
		...state,
		Messages: {...state.Messages}
	}
	switch (action.type) {
		case ADD_MESSAGE:
			let newMessage = state.Messages.MessageText;
			let NewMessage = {
				id: '1',
				text: newMessage,
				time: '10:10',
			}
			stateCopy.Messages.FirstMessages.push(NewMessage);
			stateCopy.Messages.MessageText = '';
			return stateCopy;

		case UPDATE_NEW_MESSAGE_TEXT:
			stateCopy.Messages.MessageText = action.newMessage;
			return stateCopy;

		default:
			return state;
	}
}

export const addMessageCreator = () => {
	return {
		type: ADD_MESSAGE,
	}
};
export const updateNewMessageTextCreator = (newMessage) => {
	return {
		type: UPDATE_NEW_MESSAGE_TEXT,
		newMessage: newMessage,
	}
};
export default DialogsReducer;