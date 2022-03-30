import { connect } from "react-redux";
import { addMessageCreator, updateNewMessageTextCreator } from "../../../../redux/dialogs_reducer";
import ChatFooter from "./ChatFooter";


let mapStateToProps = (state) => {
	return {
		MessageText: state.dialogs.Messages.MessageText,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addMessage: () => {
			dispatch(addMessageCreator())
		},
		onChangeMessage: (newMessage) => {
			dispatch(updateNewMessageTextCreator(newMessage))
		},
	}
}

const ChatFooterContainer = connect(mapStateToProps, mapDispatchToProps)(ChatFooter);

export default ChatFooterContainer;