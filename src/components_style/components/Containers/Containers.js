import styled from 'styled-components/macro'

export const Container = styled.div`
	width: 100%;
	max-width: 1170px;
	margin: 0 auto;
	padding: 0 15px;
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
export const FlexContainer = styled.div`
	display: flex;
	align-items:  ${({align}) => align || 'stretch'};
	justify-content: ${({justify}) => justify || 'stretch'};
	flex-direction: ${({direction}) => direction || 'row'};
	align-self: ${({self}) => self || ''};
	flex-wrap: ${({fWrap}) => fWrap || ''};
	flex: ${({sFlex}) => sFlex || ''};
	margin: ${({margin}) => margin || 0 };
	padding: ${({padding}) => padding || 0 };
	width: ${({sWidth}) => sWidth || ''};
	height: ${({sHeight}) => sHeight || ''};
	cursor: ${({cursor}) => cursor || ''};
`
export const FlexCol = styled.div`
	display: flex;
	padding: 0 15px;
	flex: ${({flex}) => flex || '1 0 50%'};
	align-items:  ${({align}) => align || 'stretch'};
	justify-content: ${({justify}) => justify || 'stretch'};
	flex-direction: ${({direction}) => direction || 'row'};
	flex-wrap: ${({fWrap}) => fWrap || 'wrap'};
	margin: ${({margin}) => margin || 0 };
	width: ${({sWidth}) => sWidth || ''};
	height: ${({sHeight}) => sHeight || ''};
	cursor: ${({cursor}) => cursor || ''};
`