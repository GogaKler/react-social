import User from './User/User'
import '../../css/users-point.css'
import { Container } from 'react-bootstrap'
import { PreloaderGhost } from '../../components/Preloaders/Preloaders'
import { AppName } from '../../components/AppName/AppName'

const Users = (props) => {

	let userElements = props.Users.map(el =>
		<User
			key={el.id}
			id={el.id}
			name={el.name}
			photosSmall={el.photos.small}
			photosLarge={el.photos.large}
			status={el.status}
			followed={el.followed}
			followProgress={props.followProgress}
			// dispatch
			follow={props.follow}
			unFollow={props.unFollow}
		/>
	)

	let pages = []; // массив цифр в пагинации

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); // высчитываем количество нужных цифр

	for (let i = 1; i <= pagesCount; i++) { // перебор тех самых цифр
		if (pages.length < 10) { // условие, чтобы не было много цифр
			pages.push(i); // пуш цифр
		}
	}

	let pagesElements = pages.map(p => { // пагинация
		return (
			<span
				key={p}
				className={props.currentPage === p ? "pagination__selected" : undefined}
				onClick={() => { props.onPageChanged(p) }}
			>{p}</span>
		)
	})
	
	return (
		<div className='point__users'>
			<Container>
				<div className='users__main-content'>
					<div className='users-header'>
						<div className="search users__search">
							<i className="icon-search bi bi-search"></i>
							<input className="input-search" type="search" placeholder="Поиск.."></input>
							<i className="icon-submit bi bi-arrow-right"></i>
						</div>
					</div>
					<div className='users-middle'>
						<div className='users-middle__header'>
							<AppName />
							<div className='users-middle__title'>
								Список пользователей
								<div className='pagination'>
									{pagesElements}
								</div>
							</div>

							{props.isFetching ? <PreloaderGhost /> : null}

							<div className="users-wrapper">
								{userElements}
							</div>


						</div>
					</div>
				</div>
			</Container>
		</div>
	);

}

export default Users;