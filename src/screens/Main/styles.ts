import { StyleSheet } from 'react-native';
import { AllColors } from '../../styles/ConstColor';

export const styles = StyleSheet.create({
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
	image: {
		width: '100%',
		height: 200,
		backgroundColor: AllColors.BlueColor,
	},
	noConten: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: AllColors.BlueColor,
	},
});
