import FirstMessage from "./FirstMessage/FirstMessage";
import LastMessage from "./LastMessage/LastMessage";

const MessageList = (props) => {
	let FirstMessageElement = props.store.getState().dialogs.Messages.FirstMessages.map( e => <FirstMessage firstText = {e.text} firstTime = {e.time} key = {e.id} /> )
	let LastMessageElement = props.store.getState().dialogs.Messages.LastMessages.map( e => <LastMessage lastText = {e.text} lastTime = {e.time}  key = {e.id}/> )


	return (
		<div className='MessageList'>
			<div className='messages-container'>

				<div className='message-group'>
					{LastMessageElement}
					{FirstMessageElement}
				</div>

			</div>
		</div>
	)
}

export default MessageList;