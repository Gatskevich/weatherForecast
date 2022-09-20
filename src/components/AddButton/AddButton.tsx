import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { assetList } from '../../assets';
import { styles } from './styles';

interface AddButtonProps {
	size: number;
}

export const AddButton = ({ size }: AddButtonProps) => {
	const navigation = useNavigation();

	const handledOnPress = () => {
		navigation.navigate('Search' as never);
	};
	return (
		<View>
			<TouchableOpacity style={styles.wrapperTouch} onPress={handledOnPress}>
				<Image
					style={{ width: size, height: size }}
					source={assetList.icons.plus}
				/>
			</TouchableOpacity>
		</View>
	);
};
