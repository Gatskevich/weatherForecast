import { ImageSourcePropType } from 'react-native';
import { assetList } from '../assets';
import {
	ICurrentWeather,
	IThreeHoursWeather,
	IThreeHoursWeatherData,
	IThreeHourWeatherData,
	IWeather,
} from '../types/GeneralInterface';

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

export const parsePartialDataWeather = (
	weather: IThreeHoursWeatherData
): Array<IThreeHoursWeather> => {
	return weather.list.map((hourWeather: IThreeHourWeatherData) => {
		const date = hourWeather.dt_txt.split('-');
		const dateDay = date[2].slice(0, 2);
		const time = date[2].slice(3, 8);

		return {
			date: `${date[1]}/${dateDay}`,
			dateTime: time,
			weather: {
				temperature: kelvinToCelsius(hourWeather.main.temp),
				feelsLike: kelvinToCelsius(hourWeather.main.feels_like),
				temperatureMin: kelvinToCelsius(hourWeather.main.temp_min),
				temperatureMax: kelvinToCelsius(hourWeather.main.temp_max),
				main: hourWeather.weather[0].main,
				description: hourWeather.weather[0].description,
				clouds: hourWeather.clouds.all,
			},
		};
	});
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

export const difineWeatherPic = (
	clouds: number,
	weather: string
): ImageSourcePropType => {
	const weatherStr = weather.toLocaleLowerCase();

	if (weatherStr === 'rain') {
		return assetList.icons.rainy;
	} else if (weatherStr === 'snow') {
		return assetList.icons.snow;
	} else if (weatherStr === 'clouds') {
		return clouds > 80 ? assetList.icons.cloud : assetList.icons.cloudy;
	} else if (weatherStr === 'clear') {
		return assetList.icons.sun;
	} else {
		return assetList.icons.cloudy;
	}
};
