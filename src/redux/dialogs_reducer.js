const SEND_MESSAGE = 'dialogs/SEND_MESSAGE'


let initalState = {
	messages: {
		myMessages: [],
		friendMessages: [
			{ id: '1', text: 'Привет?' }
		],
	}
};

const DialogsReducer = (state = initalState, action) => {
	let stateCopy ={
		...state,
		messages: {...state.messages}
	}
	switch (action.type) {
		case SEND_MESSAGE:
			let newMessage = {
				id: '2',
				text: action.message	
			}
			stateCopy.messages.myMessages.push(newMessage)
			return stateCopy

		default:
			return state;
	}
}

export const sendMessage = (message) => ({ type: SEND_MESSAGE, message })

export default DialogsReducer;