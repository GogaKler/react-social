import styled from "styled-components/macro"
import { PreloaderGhost } from '../../components/common/Preloaders/Preloaders';
import { Container, FlexCol, FlexContainer } from '../../components_style/components/Containers/Containers';
import { Title } from '../../components_style/components/Text/Text';
import UserAvatar from '../../components/common/UserAvatar/UserAvatar';
import UsersStatus from './UserStatus/UserStatus';
import Posts from './Posts/Posts';
import ProfileMenu from "./ProfileMenu/ProfileMenu";


// UserProfileWrapper
const UserProfileWrapper = styled.div`
	margin-top: ${({ theme }) => theme.margins.marginTopBlock};
`
// LeftColumn -> UserInfo
const UserInfoWrapper = styled.div`
	width: 100%;
	margin-top: -55px;
`
const UserDescription = styled.div`
	padding: 15px;
`
// RightColumn -> UserPostsWrapper
const PostsWrapper = styled.div`
	width: 100%;
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
		<>
			<ProfileMenu />
			<Container>
				<UserProfileWrapper>
					<FlexContainer>
						<FlexCol flex='1 0 33.33%'>
							<UserInfoWrapper>
								<FlexContainer align='center' justify='center' >
									<UserAvatar size='300px' avatar={props.userProfile.photos.large} />
								</FlexContainer>
								<UserDescription>
									<Title FontSize='30px'>{props.userProfile.fullName}</Title>
									<UsersStatus status={props.status} updateUserStatus={props.updateUserStatus} />
								</UserDescription>
							</UserInfoWrapper>
						</FlexCol>
						<FlexCol flex='1 0 66.66%'>
							<PostsWrapper>
								<Posts name={props.userProfile.fullName} posts={props.posts} addPost={props.addPost}/>
							</PostsWrapper>
						</FlexCol>
					</FlexContainer>
				</UserProfileWrapper>
			</Container>
		</>
	)

}

export default Profile;