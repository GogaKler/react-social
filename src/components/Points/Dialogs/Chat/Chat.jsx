import ChatFooterContainer from "./ChatFooter/ChatFooterContainer";
import ChatHeader from "./ChatHeader/ChatHeader";
import MessageList from "./MessageList/MessageList";

const Chat = (props) => {
	return (
		<div className='RightColumn chat'>

			<ChatHeader />

			<MessageList 
			Messages = {props.store.getState().dialogs.Messages}
			/>

			<ChatFooterContainer 
			store = {props.store}
			/>

		</div>
	)
}

export default Chat;