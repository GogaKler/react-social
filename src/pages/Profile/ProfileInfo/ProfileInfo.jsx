import { useState } from 'react';
import { faPencil, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import UserAvatar from "../../../components/UserAvatar/UserAvatar"
import { FlexContainer } from "../../../components_style/components/Containers/Containers"
import { Input } from "../../../components_style/components/Input/Input"
import { Title } from "../../../components_style/components/Text/Text"
import UsersStatus from '../../../components/UserStatus/UserStatus';
import { Button } from '../../../components_style/components/Button/Button';


// LeftColumn -> UserInfo
const UserInfoWrapper = styled.div`
	width: 100%;
	margin-top: -55px;
`
const UserDescription = styled.div`
	padding: 15px;
`
const UserAvatarWrapperFlex = styled(FlexContainer)`
	position: relative;
	&:hover > svg {
		opacity: 1;
		bottom: 0;
	}
`
const FontAwesomeIconHover = styled(FontAwesomeIcon)`
	position: absolute;
	padding: 6px 70px;
	background-color: ${({ theme }) => theme.neutral.neutral80};
	border-radius: ${({ theme }) => theme.radius.radiusLight} ;
	transition: ${({ theme }) => theme.transitions.transitionDefault};
	box-shadow: -1px -1px 16px 0px rgba(0, 0, 0, 0.2);
	bottom: -10px;
	opacity: 0;
	cursor: pointer;
	&:hover{
		background-color: ${({ theme }) => theme.neutral.neutral70};
	}
`
const FontAwesomeIconClose = styled(FontAwesomeIcon)`
	cursor: pointer;
	color: ${({ theme }) => theme.neutral.neutral20};
`
const ChangeAvatarWrapper = styled.div`
	position: absolute;
	bottom: -7px;
	left: -250px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 300px;
	height: 50px;
	padding: 6px 10px;
	border: 1px solid ${({ theme }) => theme.neutral.neutral60};
	border-radius: ${({ theme }) => theme.radius.radiusLight};
	background-color: ${({ theme }) => theme.neutral.neutral80};
	transition: ${({ theme }) => theme.transitions.transitionDefault};
	box-shadow: -1px -1px 16px 0px rgba(0, 0, 0, 0.2);
`

const ProfileInfo = (props) => {
	const [editMode, setEditMode] = useState(false)
	const toggleEditMode = () => {
		!editMode ? setEditMode(true) : setEditMode(false)
	}

	const onMainPhotoSelected = (e) => {
		if(e.target.files.length){
			props.savePhoto(e.target.files[0])
		}
	}
	return ( 
		<UserInfoWrapper>
		<UserAvatarWrapperFlex align='center' justify='center' direction='column' >
			<UserAvatar size='300px' avatar={props.userProfile.photos.large} />
			{props.isOwner &&
				<>
					<FontAwesomeIconHover icon={faPencil} onClick={toggleEditMode} />
					{editMode ?
						<>
							<ChangeAvatarWrapper>
								<Input name='file' type='file' multiple id='input-file' onChange={onMainPhotoSelected} />
								<FontAwesomeIconClose icon={faX} onClick={toggleEditMode} size='sm'/>
							</ChangeAvatarWrapper>
						</>
						: null}
				</>}
		</UserAvatarWrapperFlex>
		<UserDescription>
			<Title FontSize='30px'>{props.userProfile.fullName}</Title>
			<UsersStatus />
		</UserDescription>
		<Button width='100%' lg neutral fontWeight='400'>Редактировать Профиль</Button>
	</UserInfoWrapper>
	);
}
 
export default ProfileInfo;