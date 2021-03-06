import styled from 'styled-components/macro';
import { FlexContainer } from '../../../components_style/components/Containers/Containers';
import { NavLink } from 'react-router-dom';

const HeaderNavLink = styled(NavLink)`
	margin-right: 20px;
	font-size: 14px;
	font-weight: 600;
	letter-spacing: 1px;
	transition: ${({ theme }) => theme.transitions.transitionDefault};
	&:hover{
		color: ${({ theme }) => theme.neutral.neutral40};
	}
`

const HeaderNavigation = (props) => {
	return (
		<FlexContainer align='center'>
			<HeaderNavLink to='/profile'>Профиль</HeaderNavLink>
			<HeaderNavLink to='/dialogs'>Диалоги</HeaderNavLink>
			<HeaderNavLink to='/users'>Пользователи</HeaderNavLink>
		</FlexContainer>
	);
}

export default HeaderNavigation;