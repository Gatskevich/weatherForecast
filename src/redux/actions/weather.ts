import { ActionType } from '../../types/ActionType';
import { IThreeHoursWeather, IWeather } from '../../types/GeneralInterface';

const addAllCurentWeather = (curentWeather: Array<IWeather>) => {
	return {
		type: ActionType.ADD_CITIES_WEATHER,
		payload: curentWeather,
	};
};

const addThreeHoursWeather = (threeHoursWeather: Array<IThreeHoursWeather>) => {
	return {
		type: ActionType.ADD_THREE_HOURS_WEATHER,
		payload: threeHoursWeather,
	};
};

const addLocalThreeHoursWeather = (
	threeHoursWeather: Array<IThreeHoursWeather>
) => {
	return {
		type: ActionType.ADD_LOCAL_THREE_HOURS_WEATHER,
		payload: threeHoursWeather,
	};
};

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

const addAllThreeHoursWeather = (
	threeHoursWeather: Array<Array<IThreeHoursWeather>>
) => {
	return {
		type: ActionType.ADD_ALL_THREE_HOURS_WEATHER,
		payload: threeHoursWeather,
	};
};

export {
	addAllThreeHoursWeather,
	addLocalThreeHoursWeather,
	addThreeHoursWeather,
	addAllCurentWeather,
	addLocalCurentWeather,
	addCurentWeather,
};
