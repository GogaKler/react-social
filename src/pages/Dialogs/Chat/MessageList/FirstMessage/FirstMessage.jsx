const FirstMessage = (props) => {
	return (
		<div className='message first-message'>
			<div className='message-content__wrapper'>
				<div className='message-content first-text'>
					<div className='message-content__inner'>
						<p className="message-text">
							{props.firstText}
							<span className='MessageData'>
								<span className='message-time'>{props.firstTime}</span>
							</span>
						</p>
					</div>
					<div className='appendix'></div>
				</div>
				<div className='message-user-img'>
					<img className="currentUser__img" alt="Ava" src="https://w-dog.ru/wallpapers/3/1/432763282978206/pejzazh-gor-s-nebom-i-oblakami.jpg"></img>
				</div>
			</div>
		</div>
	)
}

export default FirstMessage;