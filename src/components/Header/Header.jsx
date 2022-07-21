// Point-Profile
import styled from 'styled-components/macro';
import {useState} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown, faCircleUser} from '@fortawesome/free-solid-svg-icons';
import {FlexContainer, PositionContainer} from '../../components_style/components/Containers/Containers';
import {AppName} from '../AppName/AppName';
import {Description} from '../../components_style/components/Text/Text';
import {Search} from '../Search/Search';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';

// --------------------------------------------------------------
const HeaderStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 15px 50px;
  background-color: ${({theme}) => theme.neutral.neutral80};
  z-index: 100;
`
const IconProfile = styled(FontAwesomeIcon)`
  font-size: 23px;
  color: ${({theme}) => theme.neutral.neutral10};
  transition: ${({theme}) => theme.transitions.transitionTheme};
`
const IconProfileOnHeader = styled(IconProfile)`
  margin-right: 8px;

  &:last-child {
    margin: 0;
  }
`
const WrapperToggleMenu = styled.div`
  width: 100%;
  max-width: 300px;
  padding: 10px;
  background-color: ${({theme}) => theme.neutral.neutral80};
  border-radius: ${({theme}) => theme.radius.radiusLight};
  -webkit-box-shadow: 0px -6px 15px 0px rgba(27, 27, 27, 0.2);
  -moz-box-shadow: 0px -6px 15px 0px rgba(27, 27, 27, 0.2);
  box-shadow: 0px -6px 15px 0px rgba(27, 27, 27, 0.2);
`
const DescriptionToggleMenu = styled(Description)`
  border-bottom: 1px solid ${({theme}) => theme.neutral.neutral60};
  margin-bottom: 5px;
  padding: 8px;
  width: 100%;
  transition: ${({theme}) => theme.transitions.transitionDefault};
  cursor: pointer;

  & span {
    font-weight: 800;
  }

  &:hover {
    background-color: ${({theme}) => theme.neutral.neutral70};
    border-radius: ${({theme}) => theme.radius.radiusLight};
  }

  &:last-child {
    border: none;
    margin-bottom: 0px;
  }
`
// --------------------------------------------------------------

const Header = ({id, switchTheme, theme, logout}) => {
  const [openUser, setOpenUser] = useState(false);

  const toggleOpenUser = () => {
    openUser === false ? setOpenUser(true) : setOpenUser(false)
  }

  return (
    <HeaderStyle>
      <FlexContainer align='center' justify='space-between'>
        <FlexContainer align='center'>
          <AppName margin='0 25px 0 0'/>
          <Search placeholder='Поиск...' margin='0 25px 0 0'/>
          <HeaderNavigation id={id}/>
        </FlexContainer>
        <FlexContainer align='center' justify='space-around' onClick={toggleOpenUser} cursor='pointer'>
          <IconProfileOnHeader icon={faCircleUser}/>
          {!openUser ? <FontAwesomeIcon icon={faCaretDown}/> : <FontAwesomeIcon icon={faCaretDown} rotation={180}/>}
        </FlexContainer>
      </FlexContainer>

      {!openUser ? null :
        <PositionContainer pos='absolute' top='43px' right='45px'>
          <WrapperToggleMenu>
            <FlexContainer direction='column' align='flex-start'>
              <DescriptionToggleMenu onClick={switchTheme}>Переключиться на &nbsp;
                <span>{theme === 'light' ? "Dark Theme" : "Light Theme"}</span></DescriptionToggleMenu>
              <DescriptionToggleMenu onClick={logout}>Выйти</DescriptionToggleMenu>
            </FlexContainer>
          </WrapperToggleMenu>
        </PositionContainer>}
    </HeaderStyle>
  )

}

export default Header;
