import User from './User/User'
import { PreloaderGhost } from '../../components/Preloaders/Preloaders'
import { Container } from '../../components_style/components/Containers/Containers'
import Paginator from '../../components/Paginator/Paginator'

const Users = (props) => {

	const userElements = props.Users.map(el =>
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


	return (
		<div className='point__users'>
			<Container>
				<div className='users__main-content'>
					<div className='users-middle'>
						<div className='users-middle__header'>
							<div className='users-middle__title'>
								Список пользователей
								<Paginator 
									totalUsersCount={props.totalUsersCount}
									pageSize={props.pageSize}
									currentPage={props.currentPage}
									onPageChanged={props.onPageChanged}
								/>
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