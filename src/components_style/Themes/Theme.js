

let root = {
	neutralColors:{
		neutral80: '#1B1B1E'
	},
	margins:{
		marginTopBlock: '24px',
	},
	radius:{
		radiusHard: "15px",
		radiusLight: "10px",
		radiusLight2x: "5px"
	},
	transitions: {
		transitionTheme: '0.38s ease-in-out',
		transitionDefault: '0.40s ease-out',
		transitionFast: '0.2s ease-out',
	}
}

export const darkTheme = {
	...root,
	
	primary:{
		primary90: "#FF8887",
		primary80: "#FFB3B1",
		primary10: "#69000E",
	},
	secondary: {
		secondary90: "#A5C8FF",
		secondary80: "#D4E3FF",
		secondary10: "#003062",
	},
	tertiary: {
		tertiary90: "#AAC7FF",
		tertiary10: "#002E69",
	},
	error: {
		error90: "#FFB4A9",
		error10: "#680003",
	},
	neutral:{
		neutral90: "#1B1B1E",
		neutral80: "#303033",
		neutral70: "#46464A",
		neutral60: "#5E5E62",
		neutral50: "#77777B",
		neutral40: "#919094",
		neutral30: "#ACABAF",
		neutral20: "#C8C6CA",
		neutral10: "#E4E2E6",
	},
}

export const lightTheme = {
	...root,

	primary:{
		primary90: "#F35E60",
		primary80: "#D14649",
		primary10: "#FFFFFF",
	},
	secondary: {
		secondary90: "#235FA6",
		secondary80: "#7AADFA",
		secondary10: "#FFFFFF",
	},
	tertiary: {
		tertiary90: "#2E5DA8",
		tertiary10: "#FFFFFF",
	},
	error: {
		error90: "#BA1B1B",
		error10: "#FFDAD4",
	},
	neutral:{
		neutral90: "#FFFFFF",
		neutral80: "#C8C6CA",
		neutral70: "#ACABAF",
		neutral60: "#919094",
		neutral50: "#77777B",
		neutral40: "#5E5E62",
		neutral30: "#46464A",
		neutral20: "#303033",
		neutral10: "#1B1B1E",
	},
}