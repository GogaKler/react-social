import FirstMessage from "./FirstMessage/FirstMessage";
import LastMessage from "./LastMessage/LastMessage";

const MessageList = (props) => {
	let FirstMessageElement = props.FirstMessages.map( e => <FirstMessage firstText = {e.text} firstTime = {e.time} key = {e.id} /> )
	let LastMessageElement = props.LastMessages.map( e => <LastMessage lastText = {e.text} lastTime = {e.time}  key = {e.id}/> )

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