import styled from 'styled-components/macro';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FlexContainer } from '../../components_style/components/Containers/Containers';

const SearchWrapper = styled.div`
	padding: 5px 10px;
	background-color: ${({theme}) => theme.neutral.neutral90};
	border-radius: ${({theme}) => theme.radius.radiusLight2x};
	margin: ${({margin}) => margin || 0};
	border: 1px solid ${({theme}) => theme.neutral.neutral70};
	width: ${({width}) => width || ''};
`
const SearchInput = styled.input`
	background: 0;
	border: 0;
	outline: 0;
	margin-right: 8px;
	font-style: italic;
	font-weight: 600;
	color: ${({theme}) => theme.neutral.neutral10};
	width: ${({width}) => width || ''};
`
const SearchSendIcon = styled(FontAwesomeIcon)`
	padding: 0 8px;
	border-radius: ${({theme}) => theme.radius.radiusLight};
	transition: ${({theme}) => theme.transitions.transitionDefault};
	cursor: pointer;
	&:hover{
		background-color: ${({theme}) => theme.neutral.neutral70};
	}
	
`
export const Search = (props) => {
	return (
		<SearchWrapper margin={props.margin} width={props.width}>
			<FlexContainer align='center'>
				<SearchInput placeholder={props.placeholder || 'Поиск..'} width={props.width}/>
				<SearchSendIcon icon={faCaretRight} />
			</FlexContainer>
		</SearchWrapper>
	);
}