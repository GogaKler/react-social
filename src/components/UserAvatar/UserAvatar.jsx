import styled from "styled-components/macro"
import userUndefiend from '../../assets/images/user.jpg'
import { connect } from 'react-redux'

const UserAvatarWrapper = styled.div`
	margin: ${({ margin }) => margin || '0 5px'};
	width: ${({ size }) => size || '200px'};
	height:${({ size }) => size || '200px'} ;
`
const Avatar = styled.img.attrs(({src}) => ({src: !src ? userUndefiend : src}))`
	width: 100%;
	height: 100%;
	border-radius: 500px;
	object-fit: cover;
  object-position: center;
	border: 1px solid ${({theme}) => theme.neutral.neutral30};
`

const UserAvatar = ({size, margin, userAvatar}) => {

	return (
		<UserAvatarWrapper size={size} margin={margin}>
			<Avatar src={userAvatar}/>
		</UserAvatarWrapper>
	)
}

let mapStateToProps = (state) => {
	return {
		userAvatar: !state.profile.userProfile ? null : state.profile.userProfile.photos.large,
	}
}
export default connect(mapStateToProps)(UserAvatar)
