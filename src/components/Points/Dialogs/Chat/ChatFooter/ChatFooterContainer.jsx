import React from "react";
import { addMessageCreator, updateNewMessageTextCreator } from "../../../../../redux/dialogs_reducer";
import ChatFooter from "./ChatFooter";

const ChatFooterContainer = (props) => {

	let state = props.store.getState().dialogs;

	let addMessage = () => {
		let action = addMessageCreator()

		props.store.dispatch(action);
	}

	let onChangeMessage = (newMessage) => {
		let action = updateNewMessageTextCreator(newMessage)
		props.store.dispatch(action)
	}


	return (
		<ChatFooter 
			addMessage = {addMessage}
			onChangeMessage = {onChangeMessage}
			MessageText = {state.Messages.MessageText}
		/>
	)
}

export default ChatFooterContainer;