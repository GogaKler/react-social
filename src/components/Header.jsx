const Header = () => {
	return (
		<header>
			<div className = "navbar">
				<div className = "container">
					<div className = "row row-container">

						<div className = "col-md-2">
							<div className = "logo">
								<i className ="bi bi-filter-square-fill"></i>
								<span>Social React</span>
							</div>
						</div>

						<div className = "col-md-7">
							<div className = "search">
								search
							</div>
						</div>

						<div className = "col-md-3">
							<div className = "top-links">
								Какой-то текст
							</div>
						</div>

					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;