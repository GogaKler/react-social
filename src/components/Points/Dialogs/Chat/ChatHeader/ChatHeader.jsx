const ChatHeader = () => {
	return (
		<div className='chat-header'>
			<div className='chat-currentUser__img'>
				<img className='currentUser__img' alt="Ava" src="https://steamuserimages-a.akamaihd.net/ugc/1698402776116313451/993A8BB58E84D0960A398BF731A257A4DB09F261/"></img>
			</div>
			<div className='chat-currentUser__info'>
				<div className='chat__nameUser'>
					<span className='currentUser__FirstName'>Егор&nbsp;</span>
					<span className='currentUser__LastName'>Колесников</span>
					<i className="bi bi-circle-fill"></i>
				</div>
				<div className='chat__currentUser-status'>
					last seen yesterday at 16:39
				</div>
			</div>
			<div className='chat__settings'>
				<div className='settings__wrapper'>
					<i className="bi bi-gear-fill set"></i>
					<i className="bi bi-three-dots-vertical set1"></i>
				</div>
			</div>
		</div>
	)
}

export default ChatHeader;