import userUndefiend from '../../../assets/images/user.jpg'
import styled from "styled-components"



const UserAvatarWrapper = styled.div`
	object-fit: cover;
	margin: ${({ margin }) => margin || ''};
	width: ${({ size }) => size || '200px'};
	height:${({ size }) => size || '200px'} ;
`
const Avatar = styled.img.attrs(({src}) => ({src: !src && userUndefiend}))`
	width: 100%;
	height: 100%;
	border-radius: 500px;
	border: 1px solid ${({theme}) => theme.neutral.neutral30};
`

const UserAvatar = (props) => {
	return (
		<UserAvatarWrapper size={props.size} margin={props.margin}>
			<Avatar src={props.avatar}/>
		</UserAvatarWrapper>
	)
}


export default UserAvatar
// let mapStateToProps = (state) => {
// 	return {
// 		userAvatar: state.profile.userProfile.photos.large,
// 	}
// }
// export default connect(mapStateToProps, {})(UserAvatar)
