import { ActionType } from '../../types/ActionType';
import {
	ICityCoordinates,
	ICurrentWeather,
} from '../../types/GeneralInterface';

const addCoordinates = (coordinates: ICityCoordinates) => {
	return {
		type: ActionType.ADD_COORDINATES,
		payload: coordinates,
	};
};

const addLocalCurentWeather = (localCurentWeather: ICurrentWeather) => {
	return {
		type: ActionType.ADD_LOCAL_CURRENT_WEATHER,
		payload: localCurentWeather,
	};
};

const addCurentWeather = (curentWeather: ICurrentWeather) => {
	return {
		type: ActionType.ADD_CITY_WEATHER,
		payload: curentWeather,
	};
};

export { addCoordinates, addLocalCurentWeather, addCurentWeather };
