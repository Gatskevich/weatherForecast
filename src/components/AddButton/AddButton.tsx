import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { assetList } from '../../assets';
import { styles } from './styles';

interface AddButtonProps {
	size: number;
}

export const AddButton = ({ size }: AddButtonProps) => {
	return (
		<View>
			<TouchableOpacity style={styles.wrapperTouch}>
				<Image
					style={{ width: size, height: size }}
					source={assetList.icons.plus}
				/>
			</TouchableOpacity>
		</View>
	);
};
