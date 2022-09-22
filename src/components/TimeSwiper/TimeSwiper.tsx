import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { IThreeHoursWeather } from '../../types/GeneralInterface';
import { ScrollView } from 'react-native-gesture-handler';
import { difineWeatherPic } from '../../utils/commonFuctions';

interface WeatherTimeSwiperProps {
	cityThreeHours: Array<IThreeHoursWeather>;
}

export const TimeSwiper = ({ cityThreeHours }: WeatherTimeSwiperProps) => {
	const renderItem = () => {
		return cityThreeHours.map((cityWeather, index) => {
			const dayNow = Number(cityWeather.date.split('/')[1]);
			let dayLast = 0;
			if (index !== 0) {
				dayLast = Number(cityThreeHours[index - 1].date.split('/')[1]);
			}

			return (
				<View key={index} style={styles.wrapperSlide}>
					{dayNow - dayLast === 0 ? null : <View style={styles.border} />}
					<View style={styles.slide}>
						<Text style={styles.textDate}>
							{dayNow - dayLast === 0 ? null : cityWeather.date}
						</Text>
						<Text style={styles.text}>{cityWeather.dateTime}</Text>
						<Image
							style={styles.iconWeather}
							source={difineWeatherPic(
								cityWeather.weather.clouds,
								cityWeather.weather.main
							)}
						/>
						<Text style={styles.text}>
							{cityWeather.weather.temperature}&#8451;
						</Text>
					</View>
				</View>
			);
		});
	};

	return (
		<View style={styles.wrapper}>
			<Text style={styles.textHeader}>5 day / 3 hour forecast</Text>
			<ScrollView horizontal={true}>{renderItem()}</ScrollView>
		</View>
	);
};
