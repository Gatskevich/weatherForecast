import React, { useEffect, useState } from 'react';
import {
	ImageBackground,
	View,
	RefreshControl,
	ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
	getCurrentWeatherData,
	getThreeHoursWeatherData,
} from '../../services/api';
import { AppDispatch, RootState } from '../../types/GeneralTypes';
import { styles } from './styles';
import Geolocation, {
	GeolocationResponse,
} from '@react-native-community/geolocation';
import Swiper from 'react-native-swiper';
import { ICityCoordinates, IWeather } from '../../types/GeneralInterface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { assetList } from '../../assets';
import FastImage from 'react-native-fast-image';
import { daysWeek, month } from '../../data/data';
import { difineTimeDayPic } from '../../utils/commonFuctions';
import {
	addAllCurentWeather,
	addAllThreeHoursWeather,
} from '../../redux/actions';
import { TimeSwiper } from '../../components/TimeSwiper/TimeSwiper';
import { WeatherInformation } from '../../components/WeatherInformation/WeatherInformation';

export const Main = () => {
	const [citiesCoordinates, setCitiesCoordinates] = useState(0);
	const dispatch: AppDispatch = useDispatch();
	const citiesWeather = useSelector(
		(state: RootState) => state.WeatherReducer.citiesWeather
	);
	const citiesThreeHoursWeather = useSelector(
		(state: RootState) => state.WeatherReducer.citiesThreeHoursWeather
	);

	const getCurrentPositionInformation = async (): Promise<void> => {
		if (citiesWeather.length < citiesCoordinates + 1) {
			Geolocation.getCurrentPosition(
				(position: GeolocationResponse) => {
					const { latitude, longitude } = position.coords;
					const currentCoordinates = {
						latitude,
						longitude,
					};
					dispatch(getThreeHoursWeatherData(currentCoordinates, true));
					dispatch(getCurrentWeatherData(currentCoordinates, true));
				},
				(error) => console.error(error),
				{ enableHighAccuracy: true }
			);
		}
	};

	const getCitiesCoordinates = async (): Promise<void> => {
		const citiesCoordinatesAsy = await AsyncStorage.getItem('cities');
		if (citiesCoordinatesAsy) {
			const citiesCoordinatesParse = JSON.parse(citiesCoordinatesAsy);
			setCitiesCoordinates(citiesCoordinatesParse.length);
			if (citiesWeather.length < citiesCoordinatesParse.length + 1) {
				citiesCoordinatesParse.map((cityCoordinates: ICityCoordinates) => {
					dispatch(getThreeHoursWeatherData(cityCoordinates, false));
					dispatch(getCurrentWeatherData(cityCoordinates, false));
				});
			}
		}
	};

	const onRefresh = (): void => {
		dispatch(addAllCurentWeather([]));
		dispatch(addAllThreeHoursWeather([]));
	};

	useEffect(() => {
		if (citiesWeather.length === 0 && citiesThreeHoursWeather.length === 0) {
			getCitiesCoordinates();
			getCurrentPositionInformation();
		}
	}, [citiesWeather, citiesThreeHoursWeather]);

	const renderCitiesWeather = () => {
		return citiesWeather.map((cityWeather: IWeather, index): JSX.Element => {
			const date = new Date(new Date().getTime() + 1000 * cityWeather.timezone);
			const fullDate = date.toISOString();
			const nameWeek = daysWeek[date.getDay()];
			const nameMonth = month[date.getMonth()];
			const dateDayNumber = fullDate.slice(8, 10);
			const dateTime = fullDate.slice(11, 16);
			const hours = Number(dateTime.split(':')[0]);
			const imageTimeDay = difineTimeDayPic(hours);
			const fulDate = `${nameWeek}, ${nameMonth} ${dateDayNumber} ${dateTime}`;

			return (
				<ImageBackground
					key={cityWeather.name}
					source={imageTimeDay}
					resizeMode="cover"
					style={styles.slide}>
					<WeatherInformation fulDate={fulDate} cityWeather={cityWeather} />
					<TimeSwiper cityThreeHours={citiesThreeHoursWeather[index]} />
				</ImageBackground>
			);
		});
	};

	if (
		citiesWeather.length < citiesCoordinates + 1 ||
		citiesThreeHoursWeather.length < citiesCoordinates + 1 ||
		citiesWeather.length !== citiesThreeHoursWeather.length
	) {
		return (
			<View style={styles.noConten}>
				<FastImage
					style={styles.image}
					source={assetList.gifs.weatherVane}
					resizeMode={FastImage.resizeMode.contain}
				/>
			</View>
		);
	}

	return (
		<View>
			<ScrollView
				refreshControl={
					<RefreshControl refreshing={false} onRefresh={onRefresh} />
				}>
				<Swiper
					showsPagination={false}
					loop={false}
					buttonWrapperStyle={{}}
					showsButtons={true}>
					{renderCitiesWeather()}
				</Swiper>
			</ScrollView>
		</View>
	);
};
