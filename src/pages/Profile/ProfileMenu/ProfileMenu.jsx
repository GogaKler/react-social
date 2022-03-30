import styled from "styled-components/macro"
import { NavLink } from 'react-router-dom';
import { Container, FlexCol, FlexContainer } from "../../../components_style/components/Containers/Containers";

// Menu
const MenuWrapper = styled.div`
	margin-top: ${({ theme }) => theme.margins.marginTopBlock};
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

const ProfileMenu = (props) => {
	return (
		<MenuWrapper>
			<Container>
				<FlexContainer align='center'>
					<FlexCol flex='1 0 33.33%' fWrap='no-wrap'></FlexCol>
					<FlexCol align='center' flex='1 0 66.66%' fWrap='no-wrap'>
						<ProfileMenuLink to='q'>Посты</ProfileMenuLink>
						<ProfileMenuLink to='w'>Друзья</ProfileMenuLink>
						<ProfileMenuLink to='e'>Подписки</ProfileMenuLink>
						<ProfileMenuLink to='s'>Группы</ProfileMenuLink>
					</FlexCol>
				</FlexContainer>
			</Container>
		</MenuWrapper>
	);
}

export default ProfileMenu;