import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { assetList } from '../../assets';
import { styles } from './styles';

interface BackButtonProps {
	size: number;
}

export const BackButton = ({ size }: BackButtonProps) => {
	const navigation = useNavigation();

	const handledOnPress = () => {
		navigation.goBack();
	};

	return (
		<View>
			<TouchableOpacity style={styles.wrapperTouch} onPress={handledOnPress}>
				<Image
					style={{ width: size, height: size }}
					source={assetList.icons.back}
				/>
			</TouchableOpacity>
		</View>
	);
};
