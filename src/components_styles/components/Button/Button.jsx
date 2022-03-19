import styled, { css } from 'styled-components';


const defaultButton = {
	color: ({theme}) => theme.neutralColors.neutral80,
	backgroundColor: ({theme}) => theme.primary.primary90,
	padding: '3px 6px',
	fontSize: '13px'
}
// sizes
const xxlSize = ({xxl}) => xxl && css`font-size: 15px; padding: 5px 6px;`
const xlSize = ({xl}) => xl && css`font-size: 15px; padding: 5px 6px;`
const lgSize = ({lg}) => lg  && css`font-size: 15px; padding: 5px 6px;`
const mdSize = ({md}) => md && css`font-size: 15px; padding: 5px 6px;`
const smSize = ({sm}) => sm && css`font-size: 13px; padding: 3px 6px;`
// colors
const secondColor = ({second}) => second && css`
	color: ${({theme}) => theme.neutral.neutral90};
	background-color: ${({theme}) => theme.secondary.secondary90};
`

export const Button = styled.button`
	color: ${defaultButton.color};
	background-color: ${defaultButton.backgroundColor};
	padding: ${defaultButton.padding};
	font-size: ${defaultButton.fontSize};
	border: 0;
	border-radius: ${({borderRadius}) => borderRadius || '8px'};
	font-weight: ${({fontWeight}) => fontWeight || '600'};
	margin: ${({margin}) => margin || 0 };
	width: ${({sWidth}) => sWidth || ''};
	align-self: ${({alignSelf}) => alignSelf || ''};
	cursor: pointer;
		&:focus{
			outline: none;
		}
	// sizes
	${xxlSize}
	${xlSize}
	${lgSize}
	${mdSize}
	${smSize}
	// colors
	${secondColor}
`

export const ButtonTransparent = styled.button`
	border: 0;
	margin: 0;
	border-radius: 8px;
	font-weight: 600;
	color: ${({theme}) => theme.primary.primary90};
	padding: 4px 6px;
	background: 0;
	transition: ${({theme}) => theme.transitions.transitionDefault};
	&:hover{
		background-color: ${({theme}) => theme.neutral.neutral80};
	}
	// sizes
	${xxlSize}
	${xlSize}
	${lgSize}
	${mdSize}
	${smSize}
`