import { StyleSheet } from 'react-native';
import { AllColors } from '../../styles/ConstColor';

export const styles = StyleSheet.create({
	wrapper: {},
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: AllColors.WhiteColor,
	},
	item: {
		paddingLeft: 15,
		height: 40,
		backgroundColor: AllColors.BackgroundSelect,
		justifyContent: 'center',
	},
	text: {
		fontSize: 16,
		color: AllColors.BlackColor,
	},
});
