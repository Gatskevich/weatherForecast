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

const addCurentWeather = (curentWeather: ICurrentWeather) => {
	return {
		type: ActionType.ADD_CURRENT_WEATHER,
		payload: curentWeather,
	};
};

export { addCoordinates, addCurentWeather };
