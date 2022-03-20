import styled from "styled-components/macro";
import { FlexContainer } from "../../../../components_styles/components/Containers/Containers";
import { Description, Title } from "../../../../components_styles/components/Text/Text";
import UserAvatar from "../../../common/UserAvatar/UserAvatar";

const PostWrapper = styled.div`
	background: rgb(165,200,255);
	background: linear-gradient(184deg, rgba(165,200,255,0.07886904761904767) 0%, rgba(255,136,135,0.07886904761904767) 100%);
	border-radius: ${({ theme }) => theme.radius.radiusLight2x};
	border-top: 2px solid ${({ theme }) => theme.neutral.neutral70};
	border-bottom: 2px solid ${({ theme }) => theme.neutral.neutral70};
	margin-bottom: 20px;
	&:last-child{
		margin-bottom: 0;
		border-bottom: 2px solid ${({ theme }) => theme.neutral.neutral70};
	}
`
const PostHeaderFlex = styled(FlexContainer)`
	padding: 10px 5px;
	border-bottom: 1px solid ${({ theme }) => theme.neutral.neutral70};
`
const PostBody = styled.div`
 padding: 10px 8px;
`


const Post = (props) => {
	return (
		<>
			{props.posts.map(p =>
				<PostWrapper key={p.id}>
					<PostHeaderFlex align='flex-end'>
						<UserAvatar size='30px' />
						<FlexContainer align='center'>
							<Title>{props.name}</Title>
						</FlexContainer>
					</PostHeaderFlex>
					<PostBody>
						<Title FontSize='25px' margin='0 0 18px 0'>{p.postTitle}</Title>
						<Description textColor={({ theme }) => theme.neutral.neutral20}>{p.postDesc}</Description>
					</PostBody>
				</PostWrapper>
			)}
		</>
	);
}

export default Post;