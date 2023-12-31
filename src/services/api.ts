import axios, { AxiosResponse } from 'axios';
import { API_KEY } from '@env';
import {
	addCurentWeather,
	addLocalCurentWeather,
	addLocalThreeHoursWeather,
	addThreeHoursWeather,
} from '../redux/actions';
import { ICityCoordinates } from '../types/GeneralInterface';
import { AppAction } from '../types/GeneralTypes';
import {
	parseDataWeather,
	parsePartialDataWeather,
} from '../utils/commonFuctions';

const reqType = 'GET';
const baseUrl = 'https://api.openweathermap.org';

export function getCoordinatesByLocation(name: string) {
	const url = `${baseUrl}/geo/1.0/direct?q=${name}&limit=1&appid=${API_KEY}`;

	return axios({
		method: reqType,
		url,
	});
}

export function getCurrentWeatherData(
	coordinates: ICityCoordinates,
	localType: boolean
): AppAction {
	const url = `${baseUrl}/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${API_KEY}`;
	return async (dispatch) => {
		await axios({
			method: reqType,
			url,
		})
			.then((response: AxiosResponse) => {
				const weather = parseDataWeather(response.data);
				if (localType) {
					dispatch(addLocalCurentWeather(weather));
				} else {
					dispatch(addCurentWeather(weather));
				}
			})
			.catch((response) => {
				console.error(response);
			});
	};
}

export function getThreeHoursWeatherData(
	coordinates: ICityCoordinates,
	localType: boolean
): AppAction {
	const url = `${baseUrl}/data/2.5/forecast?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${API_KEY}`;
	return async (dispatch) => {
		await axios({
			method: reqType,
			url,
		})
			.then((response: AxiosResponse) => {
				const weather = parsePartialDataWeather(response.data);
				if (localType) {
					dispatch(addLocalThreeHoursWeather(weather));
				} else {
					dispatch(addThreeHoursWeather(weather));
				}
			})
			.catch((response) => {
				console.error(response);
			});
	};
}
