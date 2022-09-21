import { ActionType } from '../../types/ActionType';
import { IAction, IInitialState } from '../../types/GeneralInterface';

const initialState: IInitialState = {
	citiesWeather: [],
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
