import { StyleSheet } from 'react-native';
import { AllColors } from '../../styles/ConstColor';

export const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	locationInfo: {
		position: 'absolute',
		alignItems: 'center',
		top: '10%',
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
		color: AllColors.WhiteColor,
		fontSize: 14,
		fontFamily: 'monospace',
	},
	descriptionText: {
		color: AllColors.WhiteColor,
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
		color: AllColors.WhiteColor,
		fontSize: 50,
		fontFamily: 'monospace',
		marginLeft: 10,
	},
});
