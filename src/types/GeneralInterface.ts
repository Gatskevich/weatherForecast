export interface ICurrentWeather {
	coord: {
		lon: number;
		lat: number;
	};
	weather: [
		{
			id: number;
			main: string;
			description:string;
			icon: string;
		}
	];
	base: string;
	main: {
		temp: number;
		feels_like: number;
		temp_min?: number;
		temp_max?: number;
		pressure?: number;
		humidity?: number;
		sea_level?: number;
		grnd_level?: number;
	};
	visibility: number;
	wind: {
		speed: number;
		deg: number;
		gust: number;
	};
	rain: {
		'1h': number;
	};
	clouds: {
		all: number;
	};
	dt: number;
	sys: {
		type: number;
		id: number;
		country: string;
		sunrise: number;
		sunset: number;
	};
	timezone: number;
	id: number;
	name: string;
	cod: number;
}

export interface ICoordinatesData {
	name: string;
	local_names: {
		[key: string]: string;
	};
	lat: number;
	lon: number;
	country: string;
}

export interface IAction {
    type: string;
	payload: any;
}

export interface ICityCoordinates {
    latitude: number;
    longitude: number;
}

export interface ICity {
	cityName: string;
	coordinates: ICityCoordinates;
}

export interface IInitialState {
    cityCoordinates: ICityCoordinates;
	localCurrentWeather: ICurrentWeather;
	citiesWeather: Array<ICurrentWeather>;
	cities: Array<ICityCoordinates>;
}


