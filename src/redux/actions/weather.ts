import { ActionType } from '../../types/ActionType';
import { IWeather } from '../../types/GeneralInterface';

const addLocalCurentWeather = (localCurentWeather: IWeather) => {
	return {
		type: ActionType.ADD_LOCAL_CURRENT_WEATHER,
		payload: localCurentWeather,
	};
};

const addCurentWeather = (curentWeather: IWeather) => {
	return {
		type: ActionType.ADD_CITY_WEATHER,
		payload: curentWeather,
	};
};

export { addLocalCurentWeather, addCurentWeather };
