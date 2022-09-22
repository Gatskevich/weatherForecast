import { StyleSheet } from 'react-native';
import { AllColors } from '../../styles/ConstColor';

export const styles = StyleSheet.create({
	wrapper: {
		position: 'absolute',
		top: '55%',
		height: 130,
	},
	slide: {
		width: 50,
		flexDirection: 'column',
		alignItems: 'center',
	},
	text: {
		color: AllColors.WhiteColor,
		fontFamily: 'monospace',
		fontSize: 14,
	},
	textHeader: {
		fontSize: 18,
		alignSelf: 'center',
		color: AllColors.WhiteColor,
		fontFamily: 'monospace',
		marginBottom: 20,
	},
	textDate: {
		color: AllColors.WhiteColor,
		fontFamily: 'monospace',
		fontSize: 14,
	},
	border: {
		width: 2,
		height: 90,
		backgroundColor: AllColors.WhiteColor,
		marginRight: 10,
	},
	wrapperSlide: {
		flexDirection: 'row',
		backgroundColor: AllColors.BackgroundSwipe,
	},
	iconWeather: {
		width: 20,
		height: 20,
	},
});
