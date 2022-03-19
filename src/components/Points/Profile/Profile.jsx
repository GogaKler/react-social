import { Container, FlexCol, FlexContainer } from '../../../components_styles/components/Containers/Containers';
import { NavLink, Route, Routes } from 'react-router-dom';
import styled from "styled-components"
import UserAvatar  from '../../common/UserAvatar/UserAvatar';
import { PreloaderGhost } from '../../common/Preloaders/Preloaders';
import Posts from './Posts/Posts';
import { Description, Title } from '../../../components_styles/components/Text/Text';
import UsersStatus from './UserStatus/UserStatus';



const ProfileWrapper = styled.div`

`
// Menu
const MenuWrapper = styled.div`
	margin-top: ${({ theme }) => theme.margins.marginTopElement};
	border-bottom: 1px solid ${({ theme }) => theme.neutral.neutral80};
`
const ProfileMenuLink = styled(NavLink)`
	font-size: 15px;
	padding: 8px 16px;
	border-bottom: 2px solid transparent;
	transition: ${({ theme }) => theme.transitions.transitionFast};
	color: ${({ theme }) => theme.neutral.neutral20};
	&.active{
		color: ${({ theme }) => theme.neutral.neutral10};
		font-weight: 600;
		border-bottom: 2px solid ${({ theme }) => theme.secondary.secondary90};
	}
	&:not(.active):hover{
		border-bottom: 2px solid ${({ theme }) => theme.neutral.neutral70};
	}
`
// Body -> UserProfile
const UserProfileWrapper = styled.div`
	margin-top: ${({ theme }) => theme.margins.marginTopElement};
`
// Body -> LeftColumn -> UserInfo
const UserInfoWrapper = styled.div`
	width: 100%;
	margin-top: -50px;
`
const UserDescription = styled.div`
	padding: 15px;
`


const Profile = (props) => {

	if (!props.userProfile) {
		return (
			<div className="loadingPage">
				<PreloaderGhost />
				<div className="loadingPage__text">Загрузка...</div>
			</div>
		)
	}
	return (
		<ProfileWrapper>
			<MenuWrapper>
				<Container>
					<FlexContainer align='center'>
						<FlexCol flex='1 0 33.33%' fWrap='no-wrap'></FlexCol>
						<FlexCol align='center' flex='1 0 66.66%' fWrap='no-wrap'>
							<ProfileMenuLink to='posts'>Посты</ProfileMenuLink>
							<ProfileMenuLink to='2'>Друзья</ProfileMenuLink>
							<ProfileMenuLink to='3'>Подписки</ProfileMenuLink>
							<ProfileMenuLink to='4'>Группы</ProfileMenuLink>
						</FlexCol>
					</FlexContainer>
				</Container>
			</MenuWrapper>
			<Container>
				<UserProfileWrapper>
					<FlexContainer>
						<FlexCol flex='1 0 33.33%'>
							<UserInfoWrapper>
								<FlexContainer align='center' >
									<UserAvatar size='300px' avatar={props.userProfile.photos.large}/>
								</FlexContainer>
								<UserDescription>
									<Title FontSize='30px'>{props.userProfile.fullName}</Title>
									<UsersStatus status={props.status} updateUserStatus={props.updateUserStatus} />
								</UserDescription>
							</UserInfoWrapper>
						</FlexCol>
						<FlexCol flex='1 0 66.66%'>
							<Routes>
								<Route path='posts' element={<Posts />} />
							</Routes>
						</FlexCol>
					</FlexContainer>
				</UserProfileWrapper>
			</Container>
		</ProfileWrapper>
	)

}

export default Profile;