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
		temp_min: number;
		temp_max: number;
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
	citiesWeather: Array<IWeather>;
	citiesThreeHoursWeather: Array<Array<IThreeHoursWeather>>;
}

export interface ISitiesSearchData {
	id: string;
	name: string;
}

export interface IRenderItem{
	item: ISitiesSearchData;
}

export interface  IWeatherInfo {
	temperature: string;
	feelsLike: string;
	temperatureMin: string;
	temperatureMax: string;
	main: string;
	description: string;
	clouds: number;
}

export interface IWeather {
	date: number;
	timezone: number;
	name: string;
	weather: IWeatherInfo;
}

export interface IThreeHoursWeather {
	date: string;
	dateTime: string;
	weather: IWeatherInfo;
}


export interface IThreeHourWeatherData {
	dt: number;
      main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number
      };
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        }
      ];
      clouds: {
        all: number
      };
      wind: {
        speed: number;
        deg: number;
        gust: number
      };
      visibility: number;
      pop: number;
      rain: {
        '3h': number;
      };
      sys: {
        pod: string;
      };
      dt_txt: string;
}

export interface IThreeHoursWeatherData {
	cod: string;
	message: number;
	cnt: number;
	list: Array<IThreeHourWeatherData>;
	city: {
		id: number;
		name: string;
		coord: {
			lat: number;
			lon: number;
		};
		country: string;
		population: number;
		timezone: number;
		sunrise: number;
		sunset: number;
	}
}
