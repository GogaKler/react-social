import styled from "styled-components/macro"
import { PreloaderGhostPage } from '../../components/Preloaders/Preloaders';
import { Container, FlexCol, FlexContainer } from '../../components_style/components/Containers/Containers';
import Posts from './Posts/Posts';
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


// UserProfileWrapper
const UserProfileWrapper = styled.div`
	margin-top: ${({ theme }) => theme.margins.marginTopBlock};
`
// RightColumn -> UserPostsWrapper
const PostsWrapper = styled.div`
	width: 100%;
`

const Profile = (props) => {
	if (!props.userProfile) {
		return (
			<PreloaderGhostPage />
		)
	}

	return (
		<>
			<ProfileMenu />
			<Container>
				<UserProfileWrapper>
					<FlexContainer>
						<FlexCol flex='1 0 33.33%'>
							<ProfileInfo userProfile={props.userProfile} isOwner={props.isOwner} savePhoto={props.savePhoto}/>
						</FlexCol>
						<FlexCol flex='1 0 66.66%'>
							<PostsWrapper>
								<Posts name={props.userProfile.fullName} posts={props.posts} addPost={props.addPost} />
							</PostsWrapper>
						</FlexCol>
					</FlexContainer>
				</UserProfileWrapper>
			</Container>
		</>
	)

}

export default Profile;