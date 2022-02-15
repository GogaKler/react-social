const CurrentUserDialog = () => {
	return (
		<div className='dialog-currentUser'>
			<div className='dialog-currentUser__img'>
				<img className='currentUser__img' alt="Ava" src="https://steamuserimages-a.akamaihd.net/ugc/1698402776116313451/993A8BB58E84D0960A398BF731A257A4DB09F261/"></img>
				<i className="bi bi-circle-fill"></i>
			</div>
			<div className='dialog-currentUser__info'>
				<div className='dialog__nameUser'>
					<span className='currentUser__FirstName'>Егор&nbsp;</span>
					<span className='currentUser__LastName'>Колесников</span>
					<span className='dialog-date'>Feb 4</span>
				</div>
				<div className="currentUser__LastMessage">
					<span className='LastMessage'>Ты где?</span>
				</div>
			</div>
		</div>
	)
}

export default CurrentUserDialog;