import styled from 'styled-components/macro'


export const Title = styled.div`
font-weight: ${({fontWeight}) => fontWeight || 600};
font-size: ${({FontSize}) => FontSize || '18px'};
text-align: ${({align}) => align || ''} ;
margin: ${({margin}) => margin || 0};
padding: ${({padding}) => padding || 0 };
position: ${({position}) => position || 'static'};
line-height: ${({lineH}) => lineH || ''};
white-space: ${({space}) => space || ''};
`
export const Description = styled.div`
	font-size: ${({fontSize}) => fontSize || ''};
	font-style: ${({fontStyle}) => fontStyle || ''};
	color:${({textColor}) => textColor ? textColor : ({theme}) => theme.neutral.neutral10};
	font-weight: ${({fontWeight}) => fontWeight || ''};
	line-height: ${({lineH}) => lineH || ''};
	text-align: ${({align}) => align || ''};
	margin: ${({margin}) => margin || 0};
	padding: ${({padding}) => padding || 0};
	white-space: ${({space}) => space || ''};
	flex: ${({flex}) => flex || ''};
`;