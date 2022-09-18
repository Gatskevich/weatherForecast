import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
	getCoordinatesByLocation,
	getCurrentWeatherData,
} from '../../services/api';
import { AppDispatch, RootState } from '../../types/GeneralTypes';
import { styleToday } from './styleToday';
export const Today = () => {
	const dispatch: AppDispatch = useDispatch();
	const coordinates = useSelector(
		(state: RootState) => state.WeatherReducer.cityCoordinates
	);
	const currentWeather = useSelector(
		(state: RootState) => state.WeatherReducer.currentWeather
	);

	useEffect(() => {
		dispatch(getCoordinatesByLocation('London'));
	}, []);

	useEffect(() => {
		if (coordinates.latitude !== 0 && coordinates.longitude !== 0) {
			dispatch(getCurrentWeatherData(coordinates));
		}
	}, [coordinates]);

	return (
		<View style={styleToday.container}>
			<Text>{currentWeather.main.feels_like}</Text>
		</View>
	);
};
