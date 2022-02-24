import ChatHeader from "./ChatHeader/ChatHeader";
import MessageList from "./MessageList/MessageList";
import ChatFooterContainer from "./ChatFooter/ChatFooterContainer";

const Chat = (props) => {
	return (
		<div className='RightColumn chat'>

			<ChatHeader />

			<MessageList 
			store = {props.store}
			/>

			<ChatFooterContainer />

		</div>
	)
}

export default Chat;