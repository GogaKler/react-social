import ChatFooter from "./ChatFooter/ChatFooter";
import ChatHeader from "./ChatHeader/ChatHeader";
import MessageList from "./MessageList/MessageList";

const Chat = (props) => {
	return (
		<div className='RightColumn chat'>

			<ChatHeader />

			<MessageList 
			Messages = {props.dialogsData.Messages}
			/>

			<ChatFooter dispatch={props.dispatch}
			Messages = {props.dialogsData.Messages}
			/>

		</div>
	)
}

export default Chat;