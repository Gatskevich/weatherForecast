import { ActionType } from '../../types/ActionType';
import { IAction, IInitialState } from '../../types/GeneralInterface';

const initialState: IInitialState = {
	cityCoordinates: {
		latitude: 0,
		longitude: 0,
	},
	citiesWeather: [],
	cities: [
		{
			latitude: 51.1079,
			longitude: 17.0385,
		},
		{
			latitude: 46.948,
			longitude: 7.4474,
		},
		{
			latitude: 59.3293,
			longitude: 18.0686,
		},
	],
	localCurrentWeather: {
		coord: {
			lon: 0,
			lat: 0,
		},
		weather: [
			{
				id: 0,
				main: '',
				description: '',
				icon: '',
			},
		],
		base: '',
		main: {
			temp: 0,
			feels_like: 0,
			temp_min: 0,
			temp_max: 0,
			pressure: 0,
			humidity: 0,
			sea_level: 0,
			grnd_level: 0,
		},
		visibility: 0,
		wind: {
			speed: 0,
			deg: 0,
			gust: 0,
		},
		rain: {
			'1h': 0,
		},
		clouds: {
			all: 0,
		},
		dt: 0,
		sys: {
			type: 0,
			id: 0,
			country: '',
			sunrise: 0,
			sunset: 0,
		},
		timezone: 0,
		id: 0,
		name: '',
		cod: 0,
	},
};

const WeatherReducer = (
	state = initialState,
	action: IAction
): IInitialState => {
	switch (action.type) {
		case ActionType.ADD_COORDINATES:
			return {
				...state,
				cityCoordinates: action.payload,
			};
		case ActionType.ADD_CITY_WEATHER:
			return {
				...state,
				citiesWeather: [...state.citiesWeather, action.payload],
			};
		case ActionType.ADD_CITIES_WEATHER:
			return {
				...state,
				citiesWeather: action.payload,
			};
		case ActionType.ADD_LOCAL_CURRENT_WEATHER:
			return {
				...state,
				citiesWeather: [action.payload, ...state.citiesWeather],
			};
		default:
			return state;
	}
};

export default WeatherReducer;
