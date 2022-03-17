import styled from 'styled-components';

export const Button = styled.button`
	border: ${({border}) => border || 0 };
	border-radius: ${({borderRadius}) => borderRadius || '8px'};
	padding: ${({padding}) => padding || '5px 10px'};
	font-size: ${({sFontSize}) => sFontSize || '16px'};
	font-weight: ${({fontWeight}) => fontWeight || ''};
	margin: ${({margin}) => margin || 0 };
	width: ${({sWidth}) => sWidth || ''};
	cursor: pointer;
	align-self: ${({alignSelf}) => alignSelf || ''};
		&:focus{
			outline: none;
		}
`