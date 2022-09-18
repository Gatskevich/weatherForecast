import axios, { AxiosResponse } from 'axios';
import { API_KEY } from '@env';
import { addCoordinates, addCurentWeather } from '../redux/actions';
import { ICityCoordinates, ICoordinatesData } from '../types/GeneralInterface';
import { AppAction } from '../types/GeneralTypes';

const reqType = 'GET';
const baseUrl = 'https://api.openweathermap.org';

export function getCoordinatesByLocation(name: string): AppAction {
	const url = `${baseUrl}/geo/1.0/direct?q=${name}&limit=1&appid=${API_KEY}`;

	return (dispatch) => {
		axios({
			method: reqType,
			url,
		})
			.then((response: AxiosResponse) => {
				const { lat, lon } = response.data[0] as ICoordinatesData;
				const coordinates: ICityCoordinates = {
					latitude: lat,
					longitude: lon,
				};
				dispatch(addCoordinates(coordinates));
			})
			.catch((response) => {
				console.error(response);
			});
	};
}

export function getCurrentWeatherData(
	coordinates: ICityCoordinates
): AppAction {
	const url = `${baseUrl}/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${API_KEY}`;

	return (dispatch) => {
		axios({
			method: reqType,
			url,
		})
			.then((response: AxiosResponse) => {
				dispatch(addCurentWeather(response.data));
			})
			.catch((response) => {
				console.error(response);
			});
	};
}
