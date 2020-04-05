import {Dimensions, Platform, StatusBar} from 'react-native'

export const STATUSBAR_HEIGHT =
	Platform.OS === 'ios' ? 45 : StatusBar.currentHeight

export const dimension = {
	fullHeight: Dimensions.get('window').height,
	fullWidth: Dimensions.get('window').width
}

export const color = {
	white: '#fff',
	error: '#e16036',
	success: '#a1c349',
	alert: '#ead637',
	darkGrey: '#5d615d',
	grey: '#979e97',
	lightGrey: '#d1d1d1',
	starYellow: '#ffd428'
}
