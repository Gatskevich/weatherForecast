import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

interface ItemProps {
	text: string;
	onPress: (text: string) => void;
}

export const Item = ({ text, onPress }: ItemProps) => {
	return (
		<TouchableOpacity onPress={() => onPress(text)} style={styles.item}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
};
