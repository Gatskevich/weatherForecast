import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { AxiosResponse } from 'axios';
import React, { useCallback, useEffect } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { Item } from '../../components/Item/Item';
import {
	getCoordinatesByLocation,
	getCurrentWeatherData,
} from '../../services/api';
import {
	ICityCoordinates,
	ICoordinatesData,
	IRenderItem,
	ISitiesSearchData,
} from '../../types/GeneralInterface';
import { AppDispatch } from '../../types/GeneralTypes';
import { styles } from './styles';

export const Search = () => {
	const [text, setText] = React.useState<string>('');
	const [data, setData] = React.useState<Array<ISitiesSearchData>>([]);
	const navigation = useNavigation();
	const dispatch: AppDispatch = useDispatch();

	const handledOnPress = useCallback((text: string) => {
		if (text !== '') {
			getCoordinatesByLocation(text)
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
					dispatch(getCurrentWeatherData(coordinates, false));
					navigation.navigate('Main' as never);
				})
				.catch((response) => {
					console.error(response);
				});
		} else {
		}
	}, []);

	const renderItem = ({ item }: IRenderItem) => {
		return <Item text={item.name} onPress={handledOnPress} />;
	};

	return (
		<View style={styles.container}>
			<TextInput
				label="City"
				mode="flat"
				value={text}
				onChangeText={(text) => setText(text)}
			/>
			<SafeAreaView style={styles.container}>
				{data.length === 0 ? (
					<Item text={text} onPress={handledOnPress} />
				) : (
					<FlatList
						data={data}
						renderItem={renderItem}
						keyExtractor={(item) => item.id}
					/>
				)}
			</SafeAreaView>
		</View>
	);
};
