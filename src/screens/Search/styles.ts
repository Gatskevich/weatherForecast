import { StyleSheet } from 'react-native';

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
		backgroundColor: 'rgba(230, 230, 230, 0.2)',
		justifyContent: 'center',
	},
	text: {
		fontSize: 16,
		color: 'black',
	},
	image: {
		flex: 1,
		width: '100%',
		height: '100%',
	},
	input: {
		width: '100%',
		backgroundColor: 'rgba(255, 51, 26, 0.7)',
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		borderBottmWidth: 0,
	},
	header: {
		backgroundColor: 'rgba(255, 51, 26, 0.7)',
	},
});
