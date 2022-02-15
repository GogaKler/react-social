import React from "react";
import { addMessageCreator, updateNewMessageTextCreator } from "../../../../../redux/diialogs_reducer";

const ChatFooter = (props) => {

	let NewMessageElement = React.createRef();

	let addMessage = () => {
		props.dispatch(addMessageCreator());
	}

	let onChangeMessage = () => {
		let newMessage = NewMessageElement.current.value;

		props.dispatch(updateNewMessageTextCreator(newMessage))
		console.log(updateNewMessageTextCreator(newMessage))
	}


	return (
		<div className='chat-footer'>
			<div className='messages-container'>
				<div className='chat-footer--wrapper'>
					<div className='message-send-footer'>
						<div className='appendix'></div>
						<div className='message-input__wrapper'>
							<button className='button message-input-button' type='button'>
								<i className="bi bi-emoji-expressionless-fill"></i>
							</button>

							<div className='message-input'>
								<textarea 
								ref = {NewMessageElement}
								value = {props.Messages.MessageText}
								onChange = {onChangeMessage}
								placeholder='Сообщение'
								></textarea>
							</div>

							<button className='button message-input-button' type='button'>
								<i className="bi bi-three-dots-vertical"></i>
							</button>
						</div>
					</div>
					<button 
					onClick = {addMessage}
					className='button message-send-button' 
					type='button'>
						<i className="bi bi-send-fill"></i>
					</button>
				</div>
			</div>

		</div>
	)
}

export default ChatFooter;