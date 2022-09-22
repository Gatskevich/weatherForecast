import { StyleSheet } from 'react-native';
import { AllColors } from '../../styles/ConstColor';

export const styles = StyleSheet.create({
	headerWrapper: {
		width: '100%',
		flexDirection: 'row',
		right: 0,
	},
	container: {
		width: '100%',
		height: '100%',
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
	image: {
		flex: 1,
		width: '100%',
		height: '100%',
	},
	input: {
		width: '100%',
		backgroundColor: AllColors.RedColor,
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		borderBottmWidth: 0,
	},
	header: {
		backgroundColor: AllColors.RedColor,
	},
});
