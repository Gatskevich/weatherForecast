import { ActionType } from '../../types/ActionType';
import { IAction, IInitialState } from '../../types/GeneralInterface';

const initialState: IInitialState = {
	citiesWeather: [],
	citiesThreeHoursWeather: [],
};

const WeatherReducer = (
	state = initialState,
	action: IAction
): IInitialState => {
	switch (action.type) {
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
		case ActionType.ADD_THREE_HOURS_WEATHER:
			return {
				...state,
				citiesThreeHoursWeather: [
					...state.citiesThreeHoursWeather,
					action.payload,
				],
			};
		case ActionType.ADD_LOCAL_THREE_HOURS_WEATHER:
			return {
				...state,
				citiesThreeHoursWeather: [
					action.payload,
					...state.citiesThreeHoursWeather,
				],
			};
		case ActionType.ADD_ALL_THREE_HOURS_WEATHER:
			return {
				...state,
				citiesThreeHoursWeather: action.payload,
			};
		default:
			return state;
	}
};

export default WeatherReducer;
