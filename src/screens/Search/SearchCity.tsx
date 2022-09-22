import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { AxiosResponse } from 'axios';
import React, { useCallback } from 'react';
import { FlatList, ImageBackground, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { assetList } from '../../assets';
import { BackButton } from '../../components/BackButton/AddButton';
import { Item } from '../../components/Item/Item';
import {
	getCoordinatesByLocation,
	getCurrentWeatherData,
	getThreeHoursWeatherData,
} from '../../services/api';
import {
	ICityCoordinates,
	ICoordinatesData,
	IRenderItem,
	ISitiesSearchData,
} from '../../types/GeneralInterface';
import { AppDispatch } from '../../types/GeneralTypes';
import { styles } from './styles';

export const SearchCity = () => {
	const [text, setText] = React.useState<string>('');
	const [data, setData] = React.useState<Array<ISitiesSearchData>>([]);
	const navigation = useNavigation();
	const dispatch: AppDispatch = useDispatch();

	const handledOnPress = useCallback((textValue: string): void => {
		if (textValue !== '') {
			getCoordinatesByLocation(textValue)
				.then(async (response: AxiosResponse) => {
					const { lat, lon } = response.data[0] as ICoordinatesData;
					const coordinates: ICityCoordinates = {
						latitude: lat,
						longitude: lon,
					};
					const allCitiesCoordinates = await AsyncStorage.getItem('cities');

					if (allCitiesCoordinates !== null) {
						await AsyncStorage.setItem(
							'cities',
							JSON.stringify([...JSON.parse(allCitiesCoordinates), coordinates])
						);
					} else {
						await AsyncStorage.setItem('cities', JSON.stringify([coordinates]));
					}
					dispatch(getThreeHoursWeatherData(coordinates, false));
					dispatch(getCurrentWeatherData(coordinates, false));
					navigation.navigate('Main' as never);
				})
				.catch((response) => {
					console.error(response);
				});
		}
	}, []);

	const renderItem = ({ item }: IRenderItem): JSX.Element => {
		return <Item text={item.name} onPress={handledOnPress} />;
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View style={styles.header}>
					<BackButton size={15} />
				</View>
				<TextInput
					label="City"
					mode="flat"
					value={text}
					onChangeText={(value) => setText(value)}
					style={styles.input}
					activeOutlineColor="red"
					activeUnderlineColor="red"
					underlineColor="black"
					selectionColor="red"
				/>
			</View>
			<ImageBackground
				source={assetList.images.city}
				style={styles.image}
				resizeMode="cover">
				<View>
					{data.length === 0 ? (
						<Item text={text} onPress={handledOnPress} />
					) : (
						<FlatList
							data={data}
							renderItem={renderItem}
							keyExtractor={(item) => item.id}
						/>
					)}
				</View>
			</ImageBackground>
		</View>
	);
};
