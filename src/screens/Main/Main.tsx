import React, { useEffect, useState } from 'react';
import {
	ImageBackground,
	ImageSourcePropType,
	Text,
	View,
	Image,
} from 'react-native';
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
import { daysWeek, month } from '../../data/data';

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
			const date = new Date(new Date().getTime() + 1000 * cityWeather.timezone);
			const fullDate = date.toISOString();
			const nameWeek = daysWeek[date.getDay()];
			const nameMonth = month[date.getMonth()];
			const dateDayNumber = fullDate.slice(8, 10);
			const dateTime = fullDate.slice(11, 16);
			const hours = Number(dateTime.split(':')[0]);
			let imageTimesDay: ImageSourcePropType = assetList.images.day;

			if (hours >= 4 && hours < 12) {
				imageTimesDay = assetList.images.morning;
			} else if (hours >= 12 && hours < 20) {
				imageTimesDay = assetList.images.day;
			} else {
				imageTimesDay = assetList.images.night;
			}

			return (
				<ImageBackground
					key={cityWeather.id}
					source={imageTimesDay}
					style={styles.slide}
					resizeMode="cover">
					<View style={styles.locationInfo}>
						<Text style={styles.textCity}>{cityWeather.name}</Text>
						<Text style={styles.textDate}>
							{nameWeek}, {nameMonth} {dateDayNumber} {dateTime}
						</Text>
					</View>
					<View style={styles.mainWeather}>
						<View style={styles.mainTemp}>
							<Image
								style={styles.iconWeather}
								source={assetList.icons.cloudy}
							/>
							<Text style={styles.textTemp}>
								{(cityWeather.main.temp - 273.15).toFixed(0)}
							</Text>
							<Image
								style={styles.iconCelsius}
								source={assetList.icons.celsius}
							/>
						</View>
						<View style={styles.additionalTemp}>
							<Text style={styles.additionalTempText}>
								{(cityWeather.main.temp_max - 273.15).toFixed(0)}&#8451; /{' '}
								{(cityWeather.main.temp_min - 273.15).toFixed(0)}&#8451; Feels
								like {(cityWeather.main.feels_like - 273.15).toFixed(0)}&#8451;
							</Text>
						</View>
						<View style={styles.description}>
							<Text style={styles.descriptionText}>
								{cityWeather.weather[0].description}
							</Text>
						</View>
					</View>
				</ImageBackground>
			);
		});
	};

	if (citiesWeather.length < lengthCity + 1) {
		return (
			<View style={styles.noConten}>
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
			buttonWrapperStyle={{}}
			showsButtons={true}>
			{renderCitiesWeather()}
		</Swiper>
	);
};
