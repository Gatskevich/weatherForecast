import React from 'react';
import { Image, Text, View } from 'react-native';
import { assetList } from '../../assets';
import { IWeather } from '../../types/GeneralInterface';
import { difineWeatherPic } from '../../utils/commonFuctions';
import { styles } from './styles';

interface WeatherInformationProps {
	fulDate: string;
	cityWeather: IWeather;
}

export const WeatherInformation = ({
	fulDate,
	cityWeather,
}: WeatherInformationProps): JSX.Element => {
	return (
		<View style={styles.wrapper}>
			<View style={styles.locationInfo}>
				<Text style={styles.textCity}>{cityWeather.name}</Text>
				<Text style={styles.textDate}>{fulDate}</Text>
			</View>
			<View style={styles.mainWeather}>
				<View style={styles.mainTemp}>
					<Image
						style={styles.iconWeather}
						source={difineWeatherPic(
							cityWeather.weather.clouds,
							cityWeather.weather.main
						)}
					/>
					<Text style={styles.textTemp}>{cityWeather.weather.temperature}</Text>
					<Image style={styles.iconCelsius} source={assetList.icons.celsius} />
				</View>
				<View style={styles.additionalTemp}>
					<Text style={styles.additionalTempText}>
						{cityWeather.weather.temperatureMax}&#8451; /{' '}
						{cityWeather.weather.temperatureMin}&#8451; Feels like{' '}
						{cityWeather.weather.feelsLike}&#8451;
					</Text>
				</View>
				<View style={styles.description}>
					<Text style={styles.descriptionText}>
						{cityWeather.weather.description}
					</Text>
				</View>
			</View>
		</View>
	);
};
