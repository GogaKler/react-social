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
	switch (action.type) {
		case ADD_MESSAGE:
			let NewMessage = {
				id: '1',
				text: state.Messages.MessageText,
				time: '10:10',
			}
			state.Messages.FirstMessages.push(NewMessage);
			state.Messages.MessageText = '';
			return state;

		case UPDATE_NEW_MESSAGE_TEXT:
			state.Messages.MessageText = action.newMessage;
			return state;

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