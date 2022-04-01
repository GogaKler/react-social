import styled, { css } from 'styled-components/macro';

// defaults
const defaultButton = {
	color: ({ theme }) => theme.neutralColors.neutral80,
	backgroundColor: ({ theme }) => theme.primary.primary90,
	padding: '3px 6px',
	fontSize: '13px'
}
// sizes
const xxlSize = ({ xxl }) => xxl && css`font-size: 15px; padding: 5px 6px;`
const xlSize = ({ xl }) => xl && css`font-size: 15px; padding: 5px 6px;`
const lgSize = ({ lg }) => lg && css`font-size: 16px; padding: 8px;`
const mdSize = ({ md }) => md && css`font-size: 15px; padding: 5px 6px;`
const smSize = ({ sm }) => sm && css`font-size: 13px; padding: 3px 6px;`
// ButtonsThemes
const transparentButton = ({ transparent }) => transparent && css`
	background: 0;
	color: ${({ theme }) => theme.primary.primary90};
	transition: ${({ theme }) => theme.transitions.transitionDefault};
		&:hover{
			background-color: ${({ theme }) => theme.neutral.neutral80};
		}
`
// Colors
const secondColor = ({ second }) => second && css`
	color: ${({ theme }) => theme.neutral.neutral90};
	background-color: ${({ theme }) => theme.secondary.secondary90};
	&:hover{
		background-color: ${({ theme }) => theme.secondary.secondary80};
	}
`
const secondColorTransparent = css`
	color: ${({ theme }) => theme.secondary.secondary90};
	transition: ${({ theme }) => theme.transitions.transitionDefault};
		&:hover{
			background-color: ${({ theme }) => theme.neutral.neutral80};
		}
`
const neutralColor = ({neutral}) => neutral && css`
	color: ${({ theme }) => theme.neutral.neutral10};
	background-color: ${({ theme }) => theme.neutral.neutral80};
	transition: ${({ theme }) => theme.transitions.transitionDefault};
		&:hover{
			background-color: ${({ theme }) => theme.neutral.neutral70};
		}
`
export const Button = styled.button`
	border: 0;
	color: ${defaultButton.color};
	background: ${defaultButton.backgroundColor};
	padding: ${defaultButton.padding};
	font-size: ${defaultButton.fontSize};
	white-space: nowrap;
	padding: ${({padding}) => padding};
	border-radius: ${({ theme }) => theme.radius.radiusLight};
	font-weight: ${({ fontWeight }) => fontWeight || '600'};
	margin: ${({ margin }) => margin || 0};
	width: ${({ width }) => width || ''};
	align-self: ${({ self }) => self || ''};
	transition: ${({ theme }) => theme.transitions.transitionDefault};
	cursor: pointer;
		&:focus{
			outline: none;
		}
		&:hover{
			background-color: ${({ theme }) => theme.primary.primary80};
		}
	// Button Themes
	${transparentButton}
	// sizes
	${xxlSize}
	${xlSize}
	${lgSize}
	${mdSize}
	${smSize}
	// colors
	${(props) => props.transparent && props.second ? secondColorTransparent : secondColor}
	${neutralColor}

`
