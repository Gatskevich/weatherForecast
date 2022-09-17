import { ActionInterface } from "../../types/AtionInterface";

const initialState = {
};

const MoviesReducer = (state = initialState, action: ActionInterface) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default MoviesReducer;
