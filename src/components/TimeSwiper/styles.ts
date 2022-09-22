import { StyleSheet } from 'react-native';

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
		color: 'white',
		fontFamily: 'monospace',
		fontSize: 14,
	},
	textHeader: {
		fontSize: 18,
		alignSelf: 'center',
		color: 'white',
		fontFamily: 'monospace',
		marginBottom: 20,
	},
	textDate: {
		color: 'white',
		fontFamily: 'monospace',
		fontSize: 14,
	},
	border: {
		width: 2,
		height: 90,
		backgroundColor: 'white',
		marginRight: 10,
	},
	wrapperSlide: {
		flexDirection: 'row',
		backgroundColor: 'rgba(204, 204, 204, 0.4)',
	},
	iconWeather: {
		width: 20,
		height: 20,
	},
});
