import CurrentUserDialog from "./CurrentUserDialog/CurrentUserDialog";

const DialogsList = () => {
	return( 
		<div className='LeftColumn dialogs'>
		<div className='dialogs__header'>
			<div className='dialogs__DropDownMenu'>
				<i className="bi bi-list dialogs__toggle"></i>
			</div>
			<div className="dialogs__search">
				<input type="search" placeholder="Поиск.."></input>
				<i className="bi bi-search"></i>
			</div>
		</div>

		<div className='dialogs__folders'>
			<div className='dialog-currentUser active'>
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
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime iste eum enim fuga deserunt. Recusandae, consequatur unde id quo porro cupiditate et, voluptatum eligendi vero, at doloremque nisi laudantium pariatur!
					</div>
				</div>
			</div>
			<CurrentUserDialog />
			<CurrentUserDialog />
			<CurrentUserDialog />
			<CurrentUserDialog />
			<CurrentUserDialog />
			<CurrentUserDialog />
		</div>
	</div>
	)
}

export default DialogsList;