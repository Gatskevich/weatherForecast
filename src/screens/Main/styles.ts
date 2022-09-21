import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	wrapper: {},
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: 'white',
	},
	slide: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textCity: {
		color: 'white',
		fontSize: 20,
		fontFamily: 'monospace',
	},
	textDate: {
		color: 'white',
		fontSize: 16,
		fontFamily: 'monospace',
	},
	iamge: {
		width: 100,
		height: 100,
		backgroundColor: '#92BBD9',
	},
	noConten: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#92BBD9',
	},
	locationInfo: {
		position: 'absolute',
		alignItems: 'center',
		top: '10%',
	},
	mainWeather: {
		position: 'absolute',
		alignItems: 'center',
		top: '22%',
	},
	mainTemp: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	additionalTemp: {
		marginTop: 10,
	},
	description: {
		marginTop: 10,
	},
	additionalTempText: {
		color: 'white',
		fontSize: 14,
		fontFamily: 'monospace',
	},
	descriptionText: {
		color: 'white',
		fontSize: 14,
		fontFamily: 'monospace',
	},
	iconWeather: {
		width: 60,
		height: 60,
	},
	iconCelsius: {
		width: 38,
		height: 38,
	},
	textTemp: {
		color: 'white',
		fontSize: 50,
		fontFamily: 'monospace',
		marginLeft: 10,
	},
});
