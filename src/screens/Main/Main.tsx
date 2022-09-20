import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentWeatherData } from '../../services/api';
import { AppDispatch, RootState } from '../../types/GeneralTypes';
import { styles } from './styles';
import Geolocation, {
	GeolocationResponse,
} from '@react-native-community/geolocation';
import Swiper from 'react-native-swiper';
import {
	ICityCoordinates,
	ICurrentWeather,
} from '../../types/GeneralInterface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { assetList } from '../../assets';
import FastImage from 'react-native-fast-image';

export const Main = () => {
	const [lengthCity, setLengthCity] = useState(0);
	const dispatch: AppDispatch = useDispatch();
	const citiesWeather = useSelector(
		(state: RootState) => state.WeatherReducer.citiesWeather
	);

	const getCurrentPositionInformation = async () => {
		if (citiesWeather.length < lengthCity + 1) {
			Geolocation.getCurrentPosition(
				(position: GeolocationResponse) => {
					const { latitude, longitude } = position.coords;
					const currentCoordinates = {
						latitude,
						longitude,
					};
					dispatch(getCurrentWeatherData(currentCoordinates, true));
				},
				(error) => console.error(error),
				{ enableHighAccuracy: true }
			);
		}
	};

	const getCitiesCoordinates = async () => {
		const citiesCoordinates = await AsyncStorage.getItem('cities');
		console.log(citiesCoordinates);
		if (citiesCoordinates) {
			const citiesCoordinatesParse = JSON.parse(citiesCoordinates);
			setLengthCity(citiesCoordinatesParse.length);
			if (citiesWeather.length < citiesCoordinatesParse.length) {
				await citiesCoordinatesParse.map(
					(cityCoordinates: ICityCoordinates) => {
						dispatch(getCurrentWeatherData(cityCoordinates, false));
					}
				);
			}
		}
	};

	useEffect(() => {
		getCitiesCoordinates();
		getCurrentPositionInformation();
	}, []);

	const renderCitiesWeather = () => {
		return citiesWeather.map((cityWeather: ICurrentWeather) => {
			return (
				<View key={cityWeather.id} style={styles.slide}>
					<Text>Name: {cityWeather.name}</Text>
					<Text>
						Feels like: {(cityWeather.main.feels_like - 273.15).toFixed(1)}
					</Text>
					<Text>Temp: {(cityWeather.main.temp - 273.15).toFixed(1)}</Text>
				</View>
			);
		});
	};

	if (citiesWeather.length < lengthCity + 1) {
		return (
			<View style={styles.slide}>
				<FastImage
					style={styles.iamge}
					source={assetList.gifs.weatherVane}
					resizeMode={FastImage.resizeMode.contain}
				/>
			</View>
		);
	}

	return (
		<Swiper
			style={styles.wrapper}
			showsPagination={false}
			loop={false}
			showsButtons={true}>
			{renderCitiesWeather()}
		</Swiper>
	);
};
