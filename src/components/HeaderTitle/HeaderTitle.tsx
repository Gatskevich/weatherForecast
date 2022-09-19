import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface HeaderTitleProps {
	text: string;
}

export const HeaderTitle = ({ text }: HeaderTitleProps) => {
	return (
		<View>
			<Text style={styles.text}>{text}</Text>
		</View>
	);
};
