import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	max-width: 1170px;
	margin: 0 auto;
	padding: 0 15px;
`

export const FlexContainer = styled.div`
	display: flex;
	align-items:  ${({align}) => align || 'stretch'};
	justify-content: ${({justify}) => justify || 'stretch'};
	flex-direction: ${({direction}) => direction || 'row'};
	flex-wrap: ${({fWrap}) => fWrap || ''};
	flex: ${({sFlex}) => sFlex || ''};
	margin: ${({margin}) => margin || 0 };
	padding: ${({padding}) => padding || 0 };
	width: ${({sWidth}) => sWidth || ''};
	height: ${({sHeight}) => sHeight || ''};
	cursor: ${({cursor}) => cursor || ''};
`
export const PositionContainer = styled.div`
	padding: ${({ padding }) => padding || ''};
	position: ${({pos}) => pos || ''};
	top: ${({top}) => top || ''};;
	right: ${({right}) => right || ''};
	bottom: ${({bottom}) => bottom || ''};;
	left: ${({left}) => left || ''};;
	z-index: ${({zIndex}) => zIndex || ''};
`