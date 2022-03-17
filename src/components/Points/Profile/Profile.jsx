import { PreloaderGhost } from '../../common/Preloaders/Preloaders';
import styled from "styled-components"
import { Container } from '../../../components_styles/components/Containers/Containers';

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