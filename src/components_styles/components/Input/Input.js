import styled from "styled-components"


export const InputWrapper = styled.div`
	background-color: ${({ theme }) => theme.neutral.neutral80};
	border-radius: ${({ theme }) => theme.radius.radiusLight};
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