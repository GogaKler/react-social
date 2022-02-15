const LastMessage = (props) => {
	return (
		<div className='message last-message'>
			<div className='message-content__wrapper'>
				<div className='message-user-img'>
					<img className="currentUser__img" alt="Ava" src="https://steamuserimages-a.akamaihd.net/ugc/1698402776116313451/993A8BB58E84D0960A398BF731A257A4DB09F261/"></img>
				</div>
				<div className='message-content last-text'>
					<div className='message-content__inner'>
						<p className="message-text">
							{props.lastText}
							<span className='MessageData'>
								<span className='message-time'>{props.lastTime}</span>
							</span>
						</p>
					</div>
					<div className='appendix'></div>
				</div>

			</div>
		</div>
	)
}

export default LastMessage;