import ChatHeader from "./ChatHeader/ChatHeader";
import MessageList from "./MessageList/MessageList";
import ChatFooterContainer from "./ChatFooter/ChatFooterContainer";
import { connect } from 'react-redux';

const Chat = (props) => {
	return (
		<div className='RightColumn chat'>

			<ChatHeader />

			<MessageList {...props}/>

			<ChatFooterContainer />

		</div>
	)
}

let mapStateToProps = (state) => {
	return{
		FirstMessages: state.dialogs.Messages.FirstMessages,
		LastMessages: state.dialogs.Messages.LastMessages
	}
}

export default connect(mapStateToProps,{})(Chat);