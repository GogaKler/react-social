import styled from "styled-components/macro"


export const InputWrapper = styled.div`
	background-color: ${({ theme }) => theme.neutral.neutral70};
	border-radius: ${({ theme }) => theme.radius.radiusLight2x};
	margin: ${({ margin }) => margin || ''};
	width: 100%;
`
export const Input = styled.input`
	border: 0;
	background: none;
	outline: none;
	color: ${({theme}) => theme.neutral.neutral10};
	padding: 4px 8px;
	width: 100%;
`