import styled from "styled-components/macro"
import userUndefiend from '../../../assets/images/user.jpg'
import { connect } from 'react-redux'



const UserAvatarWrapper = styled.div`
	object-fit: cover;
	margin: ${({ margin }) => margin || '0 5px'};
	width: ${({ size }) => size || '200px'};
	height:${({ size }) => size || '200px'} ;
`
const Avatar = styled.img.attrs(({src}) => ({src: !src ? userUndefiend : src}))`
	width: 100%;
	height: 100%;
	border-radius: 500px;
	border: 1px solid ${({theme}) => theme.neutral.neutral30};
`

const UserAvatar = (props) => {
	return (
		<UserAvatarWrapper size={props.size} margin={props.margin}>
			<Avatar src={props.userAvatar}/>
		</UserAvatarWrapper>
	)
}

let mapStateToProps = (state) => {
	return {
		userAvatar: state.profile.userProfile.photos.large,
	}
}
export default connect(mapStateToProps, {})(UserAvatar)
