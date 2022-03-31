import { createGlobalStyle } from 'styled-components/macro'

export const GlobalStyles = createGlobalStyle`
	
	:root{
		--dark-theme-light: #212121;
		--dark-theme-dark: #181818;
		--dark-theme-bgc: #0F0F0F;
		--dark-theme-light-text: #a5a5a5;
		--accent-color: #20232a;
		--accent-rgba-opac005: rgba(255, 99, 90, 0.05);
		--accent-colorLight: #282c34;
		--accent-colorVeryLight: #b1b1b1;
		--accent-colorText: #ff6363;
		--accent-colorText50: #ff636354; 
		--dark-light: #6d6d6d;
		--transintion: 0.40s ease-out;
		--transintion-fast: 0.2s ease-out;
		--black-rgba: rgba(6, 6, 6, 0.3);
	}
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