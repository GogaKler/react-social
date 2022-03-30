import { createGlobalStyle } from 'styled-components/macro'

// const fontFace = (name, src, fontWeight = 'normal', fontStyle = 'normal') => {
// 	return `
// 	@font-face{
// 		font-family: "${name}";
// 		src: url(${require('../../assets/Fonts/Roboto/' + src + '.ttf')}) format("truetype");
// 		font-weight: ${fontWeight};
// 		font-style: ${fontStyle};
// 	}`;
// }
/* ${fontFace('Roboto', 'Roboto-Thin', 100, 'normal')}
${fontFace('Roboto', 'Roboto-Light', 300, 'normal')}
${fontFace('Roboto', 'Roboto-Regular', 'normal', 'normal')}
${fontFace('Roboto', 'Roboto-Medium', 500, 'normal')}
${fontFace('Roboto', 'Roboto-Bold', 700, 'normal')}
${fontFace('Roboto', 'Roboto-Black', 900, 'normal')} */
export const GlobalStyles = createGlobalStyle`

	::-webkit-scrollbar {
		width: 7px; 
		height: 8px; 
	}
	::-webkit-scrollbar-thumb {
		background-color: #ff636315;
		width: 5px;
		height: 5px;
		border-radius: 3px;
	}
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html{
		overflow-x: hidden;
		background-color: ${({ theme }) => theme.neutral.neutral90};
	}
	body{
		overflow-x: hidden;
		font-size: 16px;
		font-family: 'Roboto', sans-serif;
		font-weight: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background-color: ${({ theme }) => theme.neutral.neutral90};
		color: ${({ theme }) => theme.neutral.neutral10};
		transition: ${({ theme }) => theme.transitions.transitionTheme};
	}
	main{
		
	}
	li{
		list-style-type: none;
	}
	a:active, a:hover, a{
  text-decoration: none;
  color: ${({ theme }) => theme.neutral.neutral10};
	}
	a{
		text-decoration: none;
	}
	textarea{
		resize: none;
	}
`