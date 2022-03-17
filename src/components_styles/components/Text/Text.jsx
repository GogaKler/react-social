import styled from 'styled-components'


export const Title = styled.div`
font-weight: ${({fontWeight}) => fontWeight || 600};
font-size: ${({sFontSize}) => sFontSize || '18px'};
text-align: ${({align}) => align || ''} ;
margin: ${({margin}) => margin || 0};
padding: ${({padding}) => padding || 0 };
position: ${({position}) => position || 'static'};
line-height: ${({lineH}) => lineH || ''};
`
export const Description = styled.div`
	font-size: ${({fontSize}) => fontSize || ''};
	font-weight: ${({fontWeight}) => fontWeight || ''};
	line-height: ${({lineH}) => lineH || '24px'};
	text-align: ${({align}) => align || ''};
	margin: ${({margin}) => margin || 0};
	padding: ${({padding}) => padding || 0};
	flex: ${({flex}) => flex || ''};
`;