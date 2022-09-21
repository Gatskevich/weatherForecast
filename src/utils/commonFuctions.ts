import { ImageSourcePropType } from 'react-native';
import { assetList } from '../assets';
import { ICurrentWeather, IWeather } from '../types/GeneralInterface';

const kelvinToCelsius = (kelvinTemperature: number): string => {
	return (kelvinTemperature - 273.15).toFixed(0);
};

export const parseDataWeather = (weather: ICurrentWeather): IWeather => {
	return {
		date: weather.dt,
		name: weather.name,
		timezone: weather.timezone,
		weather: {
			temperature: kelvinToCelsius(weather.main.temp),
			feelsLike: kelvinToCelsius(weather.main.feels_like),
			temperatureMin: kelvinToCelsius(weather.main.temp_min),
			temperatureMax: kelvinToCelsius(weather.main.temp_max),
			main: weather.weather[0].main,
			description: weather.weather[0].description,
			clouds: weather.clouds.all,
		},
	};
};

export const difineTimeDayPic = (hours: number): ImageSourcePropType => {
	if (hours >= 4 && hours < 12) {
		return assetList.images.morning;
	} else if (hours >= 12 && hours < 20) {
		return assetList.images.day;
	} else {
		return assetList.images.night;
	}
};
