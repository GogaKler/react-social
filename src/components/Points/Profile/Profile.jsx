import { PreloaderGhost } from '../../common/Preloaders/Preloaders';
import styled from "styled-components"

const ProfileWrapper = styled.div`

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
			
		</ProfileWrapper>
	)

}

export default Profile;