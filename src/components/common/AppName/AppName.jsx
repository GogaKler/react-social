import { faCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FlexContainer } from "../../../components_styles/components/Containers/Containers"
import styled, { css } from "styled-components"

const DefaultCustomSize = '22px'
const customSize = ({font_size}) => font_size || DefaultCustomSize

const DefaultSizePreset = 'md'
const xxlSize = ({presets_size}) => presets_size === 'xxl' && css`font-size: 50px;`
const xlSize = ({presets_size}) => presets_size === 'xl' && css`font-size: 40px;`
const lgSize = ({presets_size}) => presets_size === 'lg' && css`font-size: 30px;`
const mdSize = ({presets_size}) => presets_size === 'md' && css`font-size: 22px;`
const smSize = ({presets_size}) => presets_size === 'sm' && css`font-size: 15px;`

const AppTitle = styled.div`
	font-weight: 700;
	color: ${({ theme }) => theme.primary.primary90};
	transition: ${({ theme }) => theme.transitions.transitionTheme};
	cursor: pointer;
		& span{
			font-weight: 300;
		}

	font-size: ${customSize};
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

	font-size: ${customSize};
	${xxlSize}
	${xlSize}
	${lgSize}
	${mdSize}
	${smSize}
`

export const AppName = (props) => {
	return (
		<FlexContainer align='center' padding={props.padding} margin={props.margin}>
			<AppLogo icon={faCode} presets_size={props.size || DefaultSizePreset}/>
			<AppTitle presets_size={props.size || DefaultSizePreset}>React&nbsp;<span>Social</span></AppTitle>
		</FlexContainer>
	)
}