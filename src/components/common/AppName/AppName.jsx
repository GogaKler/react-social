import { faCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FlexContainer } from "../../../components_styles/components/Containers/Containers"
import styled, { css } from "styled-components"


const DefaultSize = 'md'
const xxlSize = ({sizelogo}) => sizelogo === 'xxl' && css`font-size: 50px;`
const xlSize = ({sizelogo}) => sizelogo === 'xl' && css`font-size: 40px;`
const lgSize = ({sizelogo}) => sizelogo === 'lg' && css`font-size: 30px;`
const mdSize = ({sizelogo}) => sizelogo === 'md' && css`font-size: 22px;`
const smSize = ({sizelogo}) => sizelogo === 'sm' && css`font-size: 15px;`

const AppTitle = styled.div`
	font-weight: 700;
	color: ${({ theme }) => theme.primary.primary90};
	transition: ${({ theme }) => theme.transitions.transitionTheme};
	cursor: pointer;
		& span{
			font-weight: 300;
		}
	${xxlSize}
	${xlSize}
	${lgSize}
	${mdSize}
	${smSize}
`
const AppLogo = styled(FontAwesomeIcon)`
	color: ${({ theme }) => theme.primary.primary90};
	transition: ${({ theme }) => theme.transitions.transitionTheme};
	cursor: pointer;
	margin-right: 10px;
	&:hover{
		color: ${({ theme }) => theme.neutral.neutral10};
	};
	${xxlSize}
	${xlSize}
	${lgSize}
	${mdSize}
	${smSize}
`

export const AppName = (props) => {
	return (
		<FlexContainer align='center' padding={props.padding} margin={props.margin}>
			<AppLogo icon={faCode} sizelogo={props.size || DefaultSize}/>
			<AppTitle sizelogo={props.size || DefaultSize}>React&nbsp;<span>Social</span></AppTitle>
		</FlexContainer>
	)
}